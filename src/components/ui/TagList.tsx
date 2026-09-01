import './TagList.css'

/**
 * A row of small pills, used for skills and project technologies.
 * Pass it an array of strings and it handles the markup and wrapping.
 */
type TagListProps = {
  items: string[]
  /** 'solid' pills stand out a little more than 'quiet' ones. */
  tone?: 'quiet' | 'solid'
  /** Optional label for screen readers, e.g. "Technologies used". */
  ariaLabel?: string
}

export default function TagList({
  items,
  tone = 'quiet',
  ariaLabel,
}: TagListProps) {
  return (
    <ul className={`tag-list tag-list--${tone}`} aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  )
}
