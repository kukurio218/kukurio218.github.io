import { Link } from 'react-router-dom'
import Container from '../components/common/Container'

export default function NotFound() {
  return (
    <Container className="py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-base-200 mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-bold text-base-800 mb-4">
          ページが見つかりません
        </h2>
        <p className="text-base-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link to="/" className="btn-primary">
          トップページに戻る
        </Link>
      </div>
    </Container>
  )
}
