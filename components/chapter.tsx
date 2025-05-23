"use client"

import { Reference } from "@/components/references"
import { Figure } from "@/components/figure"
import { useMemo } from "react"

interface Figure {
  id: string
  number: number
  caption: string
  position: string
}

interface ChapterProps {
  id: string
  number: number
  title: string
  content: string
  figures?: Figure[]
}

// Inline function to process references
function processReferences(text: string, keyPrefix: string, componentGenerator: (id: string, key: string) => JSX.Element) {
  const parts = text.split(/(\[ref:[a-zA-Z0-9-]+\])/g)

  return parts.map((part, index) => {
    const refMatch = part.match(/\[ref:([a-zA-Z0-9-]+)\]/)

    if (refMatch) {
      return componentGenerator(refMatch[1], `${keyPrefix}-${index}`)
    }

    return part
  })
}

export function Chapter({ id, number, title, content, figures = [] }: ChapterProps) {
  const processedContent = useMemo(() => {
    const paragraphs = content.split(/\n\n+/).filter((p) => p.trim())
    const result: JSX.Element[] = []

    paragraphs.forEach((paragraph, paragraphIndex) => {
      const processed = processReferences(paragraph, `p-${paragraphIndex}`, (id, key) => (
        <Reference key={key} id={id} className="text-primary" />
      ))

      result.push(
        <p key={`p-${paragraphIndex}`} className="text-paragraph font-sans">
          {processed}
        </p>,
      )

      const figuresAfterParagraph = figures.filter(
        (figure) => figure.position.startsWith("after:") && paragraph.includes(figure.position.replace("after:", "")),
      )

      figuresAfterParagraph.forEach((figure) => {
        result.push(
          <Figure
            key={`figure-${figure.id}`}
            caption={figure.caption}
            number={figure.number}
            width={500}
            height={300}
          />,
        )
      })

      if (paragraphIndex < paragraphs.length - 1) {
        const nextParagraph = paragraphs[paragraphIndex + 1]

        const figuresBeforeNextParagraph = figures.filter(
          (figure) =>
            figure.position.startsWith("before:") && nextParagraph.includes(figure.position.replace("before:", "")),
        )

        figuresBeforeNextParagraph.forEach((figure) => {
          result.push(
            <Figure
              key={`figure-${figure.id}`}
              caption={figure.caption}
              number={figure.number}
              width={500}
              height={300}
            />,
          )
        })
      }
    })

    return result
  }, [content, figures])

  const hasTitle = title !== ""

  return (
    <section id={id} className="scroll-m-20 theme-transition">
      <div className="full-width-container">
        <div
          className={`content-container-padded ${hasTitle ? "chapter-padding" : "chapter-padding-abstract"}`}
          style={{
            backgroundColor: !hasTitle ? "var(--ds-background-100)" : "transparent",
          }}
        >
          {hasTitle && <h2 className="title-chapter tracking-tight">{title}</h2>}
          <div className={`leading-7 content-spacing book-content ${title === "Epilogue" ? "text-center" : ""}`}>
            {processedContent}
          </div>
        </div>
      </div>
    </section>
  )
}

