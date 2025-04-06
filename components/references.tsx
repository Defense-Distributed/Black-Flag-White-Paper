"use client"
import { bookContent } from "@/data/book-content"
import { cn } from "@/lib/utils"
import { useState, useMemo } from "react"
import { Modal } from "@/components/modal"
import Link from "next/link"

// Inline function to process text with clickable links
function processText(text: string): string | (string | JSX.Element)[] {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const matches = Array.from(text.matchAll(urlRegex))

  if (matches.length === 0) {
    return text
  }

  const result: (string | JSX.Element)[] = []
  let lastIndex = 0

  matches.forEach((match, index) => {
    const [url] = match
    const matchIndex = match.index

    if (matchIndex > lastIndex) {
      result.push(text.substring(lastIndex, matchIndex))
    }

    result.push(
      <Link
        key={`link-${index}`}
        href={url}
        className="text-primary hover:text-primary/70 hover:underline break-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </Link>,
    )

    lastIndex = matchIndex + url.length
  })

  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex))
  }

  return result
}

interface ReferencesProps {
  mode?: "single" | "list"
  id?: string | null
  isOpen?: boolean
  onClose?: (() => void) | null
  className?: string
}

export function References({ mode = "single", id = null, isOpen = false, onClose = null, className = "" }: ReferencesProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  const reference = useMemo(
    () => (mode === "single" ? bookContent.references.find((ref) => ref.id === id) : null),
    [mode, id],
  )

  const handleClose = () => {
    if (mode === "list" && onClose) {
      onClose()
    } else {
      setIsModalOpen(false)
    }
  }

  if (mode === "single") {
    if (!reference) return null

    return (
      <>
        <button
          id={`ref-${id}`}
          onClick={(e) => {
            e.preventDefault()
            setIsModalOpen(true)
          }}
          className={cn(
            "inline text-xs text-primary hover:text-primary/70 cursor-pointer align-super theme-transition",
            className,
          )}
        >
          <sup>[{reference.number}]</sup>
        </button>

        <Modal isOpen={isModalOpen} onClose={handleClose} title={reference.number.toString()}>
          {processText(reference.text)}
        </Modal>
      </>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Footnotes" maxWidth="w-[90vw] sm:max-w-3xl">
      <div className="space-y-0">
        {bookContent.references.map((reference, index) => (
          <div
            key={reference.id}
            id={`footnote-${reference.id}`}
            className={`py-3 text-sm text-muted-foreground break-words ${
              index < bookContent.references.length - 1 ? "border-b border-border/40" : ""
            }`}
          >
            <span className="inline-block text-foreground px-2 mr-2 font-bold text-sm theme-transition">
              {reference.number}
            </span>
            {processText(reference.text)}
          </div>
        ))}
      </div>
    </Modal>
  )
}

interface ReferenceProps {
  id: string
  className?: string
}

export function Reference({ id, className }: ReferenceProps) {
  return <References mode="single" id={id} className={className} />
}

interface FootnotesProps {
  isOpen: boolean
  onClose: () => void
}

export function Footnotes({ isOpen, onClose }: FootnotesProps) {
  return <References mode="list" isOpen={isOpen} onClose={onClose} />
}

