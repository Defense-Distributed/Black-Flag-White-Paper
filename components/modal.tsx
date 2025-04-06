"use client"
import React from "react"
import { X } from "lucide-react"
import { createPortal } from "react-dom"

export function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-md", maxHeight = "max-h-[80vh]" }) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted || !isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose}></div>

      <div
        className={`z-50 border border-border/60 bg-background text-foreground ${maxWidth} ${maxHeight} overflow-hidden theme-transition rounded-sm flex flex-col`}
      >
        <div className="flex w-full">
          {title && (
            <div className="px-4 h-12 flex items-center justify-center border-r border-b border-border/60 theme-transition">
              <div className="font-medium text-lg">{title}</div>
            </div>
          )}

          <div className="flex-grow border-b border-border/60 theme-transition"></div>

          <div className="w-12 h-12 flex items-center justify-center border-l border-b border-border/60 theme-transition">
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground theme-transition flex items-center justify-center w-full h-full"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-5 text-left theme-transition overflow-y-auto overflow-x-hidden">{children}</div>
      </div>
    </div>,
    document.body,
  )
}

