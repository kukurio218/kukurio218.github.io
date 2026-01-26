import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AppData, AppColor } from '../../types/app'

interface AppCardProps {
  app: AppData
  index?: number
}

const colorClasses: Record<AppColor, {
  badge: string
  badgeBg: string
  hover: string
  text: string
  glow: string
}> = {
  flagquiz: {
    badge: 'text-white',
    badgeBg: 'bg-app-flagquiz',
    hover: 'hover:border-app-flagquiz/40',
    text: 'text-app-flagquiz-dark',
    glow: 'group-hover:shadow-app-flagquiz/20',
  },
  shifumiru: {
    badge: 'text-white',
    badgeBg: 'bg-app-shifumiru',
    hover: 'hover:border-app-shifumiru/40',
    text: 'text-app-shifumiru-dark',
    glow: 'group-hover:shadow-app-shifumiru/20',
  },
  themejinro: {
    badge: 'text-white',
    badgeBg: 'bg-app-themejinro',
    hover: 'hover:border-app-themejinro/40',
    text: 'text-app-themejinro-dark',
    glow: 'group-hover:shadow-app-themejinro/20',
  },
  yataimobile: {
    badge: 'text-white',
    badgeBg: 'bg-app-yataimobile',
    hover: 'hover:border-app-yataimobile/40',
    text: 'text-app-yataimobile-dark',
    glow: 'group-hover:shadow-app-yataimobile/20',
  },
  kachikan: {
    badge: 'text-white',
    badgeBg: 'bg-app-kachikan',
    hover: 'hover:border-app-kachikan/40',
    text: 'text-app-kachikan-dark',
    glow: 'group-hover:shadow-app-kachikan/20',
  },
}

export default function AppCard({ app }: AppCardProps) {
  const colors = colorClasses[app.color]
  const initial = app.name.charAt(0).toUpperCase()

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link
        to={`/apps/${app.id}`}
        className={`
          group relative block bg-white rounded-2xl p-6
          border border-base-200 ${colors.hover}
          shadow-sm transition-all duration-300 ease-out
          hover:shadow-xl ${colors.glow}
          overflow-hidden
        `}
      >
        {/* Background glow effect on hover */}
        <div
          className={`
            absolute inset-0 opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-gradient-to-br from-transparent via-transparent to-base-100/50
          `}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header with badge and title */}
          <div className="flex items-start gap-4 mb-3">
            {/* App initial badge */}
            <div
              className={`
                w-12 h-12 rounded-xl flex items-center justify-center
                ${colors.badgeBg} ${colors.badge}
                font-bold text-xl shadow-lg
                group-hover:scale-110 transition-transform duration-300
              `}
            >
              {initial}
            </div>

            <div className="flex-1 min-w-0">
              <h2 className={`text-xl font-bold ${colors.text} mb-1`}>
                {app.name}
              </h2>
              <p className="text-base-500 text-sm font-medium">
                {app.tagline}
              </p>
            </div>

            {/* Arrow icon */}
            <motion.div
              className="text-base-400 group-hover:text-base-600 transition-colors"
              initial={{ x: 0, opacity: 0 }}
              whileHover={{ x: 0 }}
              animate={{ opacity: 1 }}
            >
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-base-600 text-sm leading-relaxed pl-16">
            {app.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
