import { Link } from 'react-router-dom'
import { nomibePrivacy, nomibeTerms, NomibeLegalSection } from '../data/nomibeLegal'

type NomibePageKind = 'overview' | 'terms' | 'privacy'

interface NomibePageProps {
  page: NomibePageKind
}

const links: { page: NomibePageKind; label: string; to: string }[] = [
  { page: 'overview', label: 'アプリ概要', to: '/apps/nomibe' },
  { page: 'terms', label: '利用規約', to: '/apps/nomibe/terms' },
  { page: 'privacy', label: 'プライバシー', to: '/apps/nomibe/privacy' },
]

function NomibeNav({ current }: { current: NomibePageKind }) {
  return (
    <nav aria-label="NOMIBEページ" className="flex flex-wrap gap-2">
      {links.map((item) => (
        <Link
          key={item.page}
          to={item.to}
          aria-current={current === item.page ? 'page' : undefined}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            current === item.page
              ? 'bg-[#3a2616] text-white shadow-sm'
              : 'border border-[#d8c39c] bg-white/75 text-[#7e5314] hover:bg-white'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

function LegalContent({ sections }: { sections: NomibeLegalSection[] }) {
  return (
    <div className="space-y-5">
      {sections.map((section) => (
        <section key={section.title} className="rounded-2xl border border-[#ead9b8] bg-white p-6 shadow-[0_12px_34px_rgba(78,51,24,0.06)] md:p-8">
          <h2 className="text-xl font-bold tracking-tight text-[#3a2616] md:text-2xl">{section.title}</h2>
          <div className="mt-4 space-y-3 text-[15px] leading-8 text-[#66523e]">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.items && (
              <ul className="grid gap-2 pl-1">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8791f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

function Overview() {
  const features = [
    ['01', '気分を宣言', '0からMAXまで、今日の「飲みたい」をひと目で友達に伝えられます。'],
    ['02', '集まりをつくる', 'オープンな飲み会も、選んだ友達だけの招待も。参加状況をひとつに整理します。'],
    ['03', 'そのまま話す', '飲み会ごとのチャットやDMで、時間やお店の相談まで自然につながります。'],
    ['04', '友達だけで安心', 'クローズドな関係、通報・ブロック、20歳以上の年齢確認で安全に配慮します。'],
  ]

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-8 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:pt-14">
        <div className="relative z-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#b8791f]">Mood to meet</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#3a2616] sm:text-7xl">NOMIBE</h1>
          <p className="mt-6 text-2xl font-bold leading-relaxed text-[#3a2616]">「今日、飲みたい」を<br />言葉にしなくても伝えられる。</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#745d46]">のみべ度を宣言するだけで、誘う・誘われるの小さなハードルをほどく。いつもの友達との飲み会が自然に始まる、クローズドなコミュニケーションアプリです。</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#3a2616] px-5 py-3 text-sm font-bold text-white">iOS / Android 公開準備中</span>
            <a href="mailto:kuroda.lifex@gmail.com" className="rounded-full border border-[#c4a97e] bg-white px-5 py-3 text-sm font-bold text-[#7e5314] transition hover:-translate-y-0.5 hover:shadow-md">お問い合わせ</a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#e4d3b2] bg-[#fff8e8] shadow-[0_28px_80px_rgba(78,51,24,0.18)]">
          <img src="/images/apps/nomibe-hero.webp" alt="夕暮れの街で待ち合わせる友達のイラスト" className="aspect-[16/10] h-full w-full object-cover object-center" />
        </div>
      </section>

      <section className="border-y border-[#ead9b8] bg-white/70 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#b8791f]">How it works</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#3a2616] md:text-5xl">誘う前の、ちょうどいい合図。</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map(([number, title, body]) => (
              <article key={number} className="rounded-3xl border border-[#ead9b8] bg-[#fffbf2] p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(78,51,24,0.09)]">
                <span className="font-mono text-sm font-bold text-[#b8791f]">{number}</span>
                <h3 className="mt-5 text-2xl font-bold text-[#3a2616]">{title}</h3>
                <p className="mt-3 leading-7 text-[#745d46]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-[#241703] p-8 text-white md:grid-cols-[1fr_auto] md:items-end md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffd25a]">Drink responsibly</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">楽しい夜は、安全から。</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">NOMIBEは20歳以上の方を対象としています。飲酒の強要や飲酒運転を許さず、通報・ブロック機能で安心できるコミュニティづくりを支えます。</p>
          </div>
          <Link to="/apps/nomibe/terms" className="inline-flex rounded-full bg-[#ffd25a] px-5 py-3 text-sm font-bold text-[#241703] transition hover:bg-white">利用ルールを見る</Link>
        </div>
      </section>
    </>
  )
}

export default function NomibePage({ page }: NomibePageProps) {
  const isLegal = page !== 'overview'
  const title = page === 'terms' ? '利用規約' : 'プライバシーポリシー'
  const description = page === 'terms'
    ? '安心してNOMIBEを利用するためのルールを定めています。'
    : 'NOMIBEが取り扱う情報と、その守り方を説明します。'

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_0%,#fff2d6_0%,#fbf0dc_28%,#fffdf8_70%)] text-[#3a2616]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <Link to="/apps/nomibe" className="text-xl font-black tracking-[0.08em]">NOMIBE</Link>
        <NomibeNav current={page} />
      </div>

      {isLegal ? (
        <main className="mx-auto max-w-4xl px-5 pb-24 pt-12 md:px-8 md:pt-20">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#b8791f]">Legal</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-[#745d46]">{description}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8b7358]">
            <span>制定日：2026年7月27日</span>
            <span>運営者：CUKU Labs</span>
            <span>代表者：黒田 理央</span>
          </div>
          <div className="mt-12">
            <LegalContent sections={page === 'terms' ? nomibeTerms : nomibePrivacy} />
          </div>
          <div className="mt-10 rounded-2xl border border-[#e4d3b2] bg-[#fff8e8] p-6 text-sm leading-7 text-[#745d46]">
            <p className="font-bold text-[#3a2616]">お問い合わせ</p>
            <a href="mailto:kuroda.lifex@gmail.com" className="mt-1 inline-block font-bold text-[#9a6217] underline decoration-[#d8c39c] underline-offset-4">kuroda.lifex@gmail.com</a>
          </div>
        </main>
      ) : <main><Overview /></main>}
    </div>
  )
}
