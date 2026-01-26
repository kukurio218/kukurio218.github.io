import Container from '../components/common/Container'
import HeroSection from '../components/home/HeroSection'
import AppGrid from '../components/home/AppGrid'
import { apps } from '../data/apps'

export default function Home() {
  return (
    <>
      {/* Hero Section - Full screen dark gradient */}
      <HeroSection />

      {/* Apps Section - Light background */}
      <section className="bg-base-50 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-base-800 mb-4">
              アプリ一覧
            </h2>
            <p className="text-base-600 text-lg max-w-2xl mx-auto">
              日常をもっと便利に、もっと楽しくするアプリをお届けします
            </p>
          </div>
          <AppGrid apps={apps} />
        </Container>
      </section>
    </>
  )
}
