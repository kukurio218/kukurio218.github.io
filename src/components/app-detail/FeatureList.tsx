interface FeatureListProps {
  features: string[]
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3 text-base-700">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
          <span className="leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  )
}
