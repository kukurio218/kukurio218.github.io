import { useParams, Link } from 'react-router-dom'
import Container from '../components/common/Container'
import Section from '../components/common/Section'
import AppHeader from '../components/app-detail/AppHeader'
import FeatureList from '../components/app-detail/FeatureList'
import PrivacyPolicy from '../components/app-detail/PrivacyPolicy'
import ContactInfo from '../components/app-detail/ContactInfo'
import { getAppById } from '../data/apps'
import NotFound from './NotFound'

export default function AppDetail() {
  const { appId } = useParams<{ appId: string }>()
  const app = appId ? getAppById(appId) : undefined

  if (!app) {
    return <NotFound />
  }

  return (
    <Container className="py-8 md:py-12">
      <AppHeader app={app} />

      <div className="bg-white rounded-xl shadow-sm border border-base-100 p-6 md:p-8">
        <Section title="アプリの概要">
          {app.detailedDescription ? (
            <div className="space-y-3 text-base-700 leading-relaxed">
              {app.detailedDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className="text-base-700 leading-relaxed">{app.description}</p>
          )}
        </Section>

        {app.challenges && (
          <Section title="解決する課題">
            <FeatureList features={app.challenges} />
          </Section>
        )}

        <Section title="主な機能">
          <FeatureList features={app.features} />
        </Section>

        {app.targetUsers && (
          <Section title="ターゲットユーザー">
            <FeatureList features={app.targetUsers} />
          </Section>
        )}

        <Section title="プライバシーポリシー">
          <PrivacyPolicy sections={app.privacyPolicy} />
        </Section>

        <Section title="お問い合わせ">
          <ContactInfo />
        </Section>

        <div className="mt-8 pt-6 border-t border-base-100">
          <Link to="/" className="btn-primary">
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </Container>
  )
}
