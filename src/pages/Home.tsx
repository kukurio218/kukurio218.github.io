import Container from '../components/common/Container'
import AppGrid from '../components/home/AppGrid'
import { apps } from '../data/apps'

export default function Home() {
  return (
    <Container className="py-8 md:py-12">
      <AppGrid apps={apps} />
    </Container>
  )
}
