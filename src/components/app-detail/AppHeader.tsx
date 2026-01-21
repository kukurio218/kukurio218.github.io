import { AppData, AppColor } from '../../types/app'

interface AppHeaderProps {
  app: AppData
}

const bgClasses: Record<AppColor, string> = {
  flagquiz: 'bg-app-flagquiz-light',
  shiftcalendar: 'bg-app-shiftcalendar-light',
  themejinro: 'bg-app-themejinro-light',
  yataimobile: 'bg-app-yataimobile-light',
  kachikan: 'bg-app-kachikan-light',
}

const textClasses: Record<AppColor, string> = {
  flagquiz: 'text-app-flagquiz-dark',
  shiftcalendar: 'text-app-shiftcalendar-dark',
  themejinro: 'text-app-themejinro-dark',
  yataimobile: 'text-app-yataimobile-dark',
  kachikan: 'text-app-kachikan-dark',
}

export default function AppHeader({ app }: AppHeaderProps) {
  return (
    <div className={`${bgClasses[app.color]} rounded-xl p-6 md:p-8 mb-8`}>
      <h1 className={`text-2xl md:text-3xl font-bold ${textClasses[app.color]} mb-2`}>
        {app.name}
      </h1>
      <p className="text-base-700">{app.tagline}</p>
    </div>
  )
}
