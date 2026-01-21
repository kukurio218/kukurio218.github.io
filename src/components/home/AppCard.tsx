import { Link } from 'react-router-dom'
import { AppData, AppColor } from '../../types/app'

interface AppCardProps {
  app: AppData
}

const colorClasses: Record<AppColor, { border: string; hover: string; text: string }> = {
  flagquiz: {
    border: 'border-l-app-flagquiz',
    hover: 'hover:border-app-flagquiz/30',
    text: 'text-app-flagquiz-dark',
  },
  shiftcalendar: {
    border: 'border-l-app-shiftcalendar',
    hover: 'hover:border-app-shiftcalendar/30',
    text: 'text-app-shiftcalendar-dark',
  },
  themejinro: {
    border: 'border-l-app-themejinro',
    hover: 'hover:border-app-themejinro/30',
    text: 'text-app-themejinro-dark',
  },
  yataimobile: {
    border: 'border-l-app-yataimobile',
    hover: 'hover:border-app-yataimobile/30',
    text: 'text-app-yataimobile-dark',
  },
  kachikan: {
    border: 'border-l-app-kachikan',
    hover: 'hover:border-app-kachikan/30',
    text: 'text-app-kachikan-dark',
  },
}

export default function AppCard({ app }: AppCardProps) {
  const colors = colorClasses[app.color]

  return (
    <Link
      to={`/apps/${app.id}`}
      className={`
        group block bg-white rounded-xl p-6
        border border-base-100 border-l-4 ${colors.border}
        shadow-sm transition-all duration-200 ease-out
        hover:shadow-md hover:-translate-y-1 ${colors.hover}
      `}
    >
      <h2 className={`text-xl font-bold mb-2 ${colors.text} group-hover:underline underline-offset-2`}>
        {app.name}
      </h2>
      <p className="text-base-600 text-sm leading-relaxed">
        {app.description}
      </p>
    </Link>
  )
}
