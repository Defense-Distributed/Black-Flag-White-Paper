"use client"
import { bookContent } from "@/data/book-content"
import { Chapter } from "@/components/chapter"
import { Spacer } from "@/components/spacer"
import { Footnotes } from "@/components/references"
import React, { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Page() {
  const [isFootnotesOpen, setIsFootnotesOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex min-h-screen flex-col theme-transition">
      <Spacer minHeight="2rem" />
      <div className="relative flex-1 px-4 sm:px-6 max-w-3xl mx-auto w-full">
        <main>
          <div className="space-y-0">
            <ThemeToggleTitles theme={theme} setTheme={setTheme} />

            <section className="scroll-m-20">
              <div className="full-width-container">
                <div className="content-container-padded">
                  <p className="text-subtitle text-muted-foreground">A primer on copyright and 3d guns</p>
                </div>
              </div>
            </section>

            <Spacer />

            {bookContent.chapters.map((chapter, index) => (
              <React.Fragment key={`chapter-fragment-${index}`}>
                <Chapter
                  key={`chapter-${index}`}
                  id={`chapter-${index + 1}`}
                  number={index + 1}
                  title={chapter.title}
                  content={chapter.content}
                  figures={chapter.figures}
                />
                {index < bookContent.chapters.length - 1 && <Spacer key={`spacer-${index}`} minHeight="2rem" />}
              </React.Fragment>
            ))}

            <Spacer />

            <section className="scroll-m-20">
              <div className="full-width-container">
                <div className="content-container-padded flex justify-center logo-padding">
                  <div className="logo-container theme-transition">
                    <Image
                      src="/Black Flag.svg"
                      alt="Black Flag White Paper Logo"
                      width={1200}
                      height={1200}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>

            <Footer onOpenFootnotes={() => setIsFootnotesOpen(true)} />

            <Spacer />
          </div>
        </main>
      </div>

      <Footnotes isOpen={isFootnotesOpen} onClose={() => setIsFootnotesOpen(false)} />
    </div>
  )
}

function ThemeToggleTitles({ theme, setTheme }) {
  return (
    <>
      <section className="scroll-m-20">
        <div className="full-width-container">
          <div className="content-container-padded">
            <h1
              className={`title-main font-bold tracking-tighter text-center whitespace-nowrap overflow-hidden theme-title ${theme === "dark" ? "active" : "inactive"}`}
              onClick={() => setTheme("dark")}
            >
              BLACK FLAG
            </h1>
          </div>
        </div>
      </section>

      <section className="scroll-m-20">
        <div className="full-width-container">
          <div className="content-container-padded">
            <h1
              className={`title-main font-bold tracking-tighter text-center whitespace-nowrap overflow-hidden theme-title ${theme === "light" ? "active" : "inactive"}`}
              onClick={() => setTheme("light")}
            >
              WHITE PAPER
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

