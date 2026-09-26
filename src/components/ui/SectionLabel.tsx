type SectionLabelProps = {
  children: string
  as?: 'h2' | 'p'
  id?: string
}

/**
 * Small uppercase label that opens most sections, paired with the gold rule
 * defined in global.css. Rendered as a heading when it labels the section.
 */
export default function SectionLabel({
  children,
  as: Tag = 'p',
  id,
}: SectionLabelProps) {
  return (
    <Tag className="section-label" id={id}>
      {children}
    </Tag>
  )
}
