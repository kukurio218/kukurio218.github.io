import { AppData } from '../../types/app'
import AppCard from './AppCard'

interface AppGridProps {
  apps: AppData[]
}

export default function AppGrid({ apps }: AppGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {apps.map(app => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  )
}
