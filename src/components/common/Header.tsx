import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-base-900 text-base-50">
      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
        <Link to="/" className="group block">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight transition-colors group-hover:text-accent-400">
            Kukurio Apps
          </h1>
          <p className="mt-1 text-base-400 text-sm sm:text-base">
            開発したアプリケーションをご紹介します
          </p>
        </Link>
      </div>
    </header>
  )
}
