interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-xl font-bold text-base-800 mb-4 pb-2 border-b-2 border-accent-500">
        {title}
      </h2>
      {children}
    </section>
  )
}
