"use client"

import { cn } from "@/lib/utils"
import { Reference } from "@/components/references"
import { useMemo } from "react"
import Image from "next/image"

function processReferences(
  text: string,
  keyPrefix: string,
  componentGenerator: (id: string, key: string) => JSX.Element
): (string | JSX.Element)[] {
  const parts = text.split(/(\[ref:[a-zA-Z0-9-]+\])/g)

  return parts.map((part: string, index: number) => {
    const refMatch = part.match(/\[ref:([a-zA-Z0-9-]+)\]/)

    if (refMatch) {
      return componentGenerator(refMatch[1], `${keyPrefix}-${index}`)
    }

    return part
  })
}

interface FigureProps {
  caption: string
  number: number
  className?: string
  width?: number
  height?: number
}

export function Figure({ caption, number, className, width = 300, height = 150 }: FigureProps) {
  const processedCaption = useMemo(
    () => processReferences(caption, `caption-${number}`, (id: string, key: string) => (
      <Reference key={key} id={id} className="text-muted-foreground" />
    )),
    [caption, number],
  )

  return (
    <figure className={cn("figure-margin theme-transition", className)}>
      <div className="border border-border/60 bg-white figure-padding w-full theme-transition">
        <div className="relative w-full bg-white flex items-center justify-center theme-transition">
          <Image
            src={`/Figure ${number}.png`}
            alt={`Figure ${number}`}
            width={width}
            height={height}
            className="max-w-full h-auto"
            style={{ objectFit: "contain" }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 300px"
            priority={number <= 3}
          />
        </div>
      </div>
      <figcaption className="text-caption text-muted-foreground theme-transition">
        <span className="font-medium">Figure {number}:</span> {processedCaption}
      </figcaption>
    </figure>
  )
}

