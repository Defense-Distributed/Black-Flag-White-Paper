"use client"

import { Reference } from "@/components/references"
import { Figure } from "@/components/figure"
import { useMemo } from "react"

// Inline function to process references
function processReferences(text, keyPrefix, componentGenerator) {
  const parts = text.split(/(\[ref:[a-zA-Z0-9-]+\])/g)

  return parts.map((part, index) => {
    const refMatch = part.match(/\[ref:([a-zA-Z0-9-]+)\]/)

    if (refMatch) {
      return componentGenerator(refMatch[1], `${keyPrefix}-${index}`)
    }

    return part
  })
}

export function Chapter({ id, number, title, content, figures = [] }) {
  const processedContent = useMemo(() => {
    const paragraphs = content.split(/\n\n+/).filter((p) => p.trim())
    const result = []

    paragraphs.forEach((paragraph, paragraphIndex) => {
      const processed = processReferences(paragraph, `p-${paragraphIndex}`, (id, key) => (
        <Reference key={key} id={id} />
      ))

      result.push(
        <p key={`p-${paragraphIndex}`} className="text-paragraph">
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
          <div className={`leading-7 content-spacing ${title === "Epilogue" ? "text-center" : ""}`}>
            {processedContent}
          </div>
        </div>
      </div>
    </section>
  )
}

