/**
 * Renders a string where any text inside {curly braces} is shown in the
 * accent serif font.
 *
 *   <Highlight text="I build {thoughtful} software." />
 *
 * This lets you control the emphasis from data/portfolio.ts without
 * writing any JSX.
 */
type HighlightProps = {
  text: string
}

export default function Highlight({ text }: HighlightProps) {
  // Splitting on a capturing group gives us alternating pieces:
  // even positions are plain text, odd positions were inside braces.
  const parts = text.split(/\{([^}]+)\}/g)

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <em key={index} className="accent-serif">
            {part}
          </em>
        ) : (
          part
        ),
      )}
    </>
  )
}
