import { AppData, AppColor } from '../../types/app'

interface AppHeaderProps {
  app: AppData
}

const bgClasses: Record<AppColor, string> = {
  flagquiz: 'bg-app-flagquiz-light',
  shifumiru: 'bg-app-shifumiru-light',
  themejinro: 'bg-app-themejinro-light',
  yataimobile: 'bg-app-yataimobile-light',
  kachikan: 'bg-app-kachikan-light',
}

const textClasses: Record<AppColor, string> = {
  flagquiz: 'text-app-flagquiz-dark',
  shifumiru: 'text-app-shifumiru-dark',
  themejinro: 'text-app-themejinro-dark',
  yataimobile: 'text-app-yataimobile-dark',
  kachikan: 'text-app-kachikan-dark',
}

const buttonClasses: Record<AppColor, string> = {
  flagquiz: 'bg-app-flagquiz hover:bg-app-flagquiz-dark',
  shifumiru: 'bg-app-shifumiru hover:bg-app-shifumiru-dark',
  themejinro: 'bg-app-themejinro hover:bg-app-themejinro-dark',
  yataimobile: 'bg-app-yataimobile hover:bg-app-yataimobile-dark',
  kachikan: 'bg-app-kachikan hover:bg-app-kachikan-dark',
}

export default function AppHeader({ app }: AppHeaderProps) {
  return (
    <div className={`${bgClasses[app.color]} rounded-xl p-6 md:p-8 mb-8`}>
      <h1 className={`text-2xl md:text-3xl font-bold ${textClasses[app.color]} mb-2`}>
        {app.name}
      </h1>
      <p className="text-base-700 mb-4">{app.tagline}</p>
      {app.appStoreUrl ? (
        <a
          href={app.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-colors ${buttonClasses[app.color]}`}
        >
          App Storeで見る
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-base-200 text-base-600 font-medium">
          準備中
        </span>
      )}
    </div>
  )
}
