export function Spacer({ minHeight = "2rem" }) {
  return (
    <section className="scroll-m-20 theme-transition">
      <div className="full-width-container">
        <div
          className="content-container"
          style={{
            minHeight: typeof minHeight === "string" ? minHeight : `${minHeight}rem`,
            height: typeof minHeight === "string" ? minHeight : `${minHeight}rem`,
          }}
        ></div>
      </div>
    </section>
  )
}

