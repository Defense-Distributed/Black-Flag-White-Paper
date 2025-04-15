"use client"
import { Button } from "@/components/ui/button"

interface FooterProps {
  onOpenFootnotes: () => void
}

export function Footer({ onOpenFootnotes }: FooterProps) {
  return (
    <section className="scroll-m-20">
      <div className="full-width-container">
        <div className="content-container flex flex-col sm:flex-row justify-end">
          <Button onClick={onOpenFootnotes} variant="outline" className="book-button">
            Footnotes
          </Button>
          <Button
            onClick={() => window.open("https://github.com/Defense-Distributed/Black-Flag-White-Paper", "_blank")}
            variant="outline"
            className="book-button-secondary"
          >
            Source Code
          </Button>
          <Button
            onClick={() => window.open("https://defcad.com/library/black-flag-white-paper/", "_blank")}
            variant="outline"
            className="book-button-secondary"
          >
            Download
          </Button>
        </div>
      </div>
    </section>
  )
}

