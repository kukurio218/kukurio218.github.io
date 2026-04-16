import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contactEmail } from '../data/apps'

const APP_STORE_URL = 'https://apps.apple.com/jp/app/%E3%83%9B%E3%83%B3%E3%83%8D%E4%BA%BA%E7%8B%BC/id6747802748'
const GOOGLE_PLAY_URL = '#'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e8461e]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-white font-bold text-lg">ホンネ人狼</a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-to-play" className="text-white/90 hover:text-white text-sm transition-colors">遊び方</a>
          <a href="#modes" className="text-white/90 hover:text-white text-sm transition-colors">モード</a>
          <a href="#features" className="text-white/90 hover:text-white text-sm transition-colors">特徴</a>
          <a href="#download" className="px-5 py-2 bg-white text-[#e8461e] rounded-full text-sm font-bold hover:bg-white/90 transition-colors">ダウンロード</a>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#e8461e] border-t border-white/20 px-4 py-4 space-y-3">
          <a href="#how-to-play" onClick={() => setMenuOpen(false)} className="block text-white/90 hover:text-white text-sm">遊び方</a>
          <a href="#modes" onClick={() => setMenuOpen(false)} className="block text-white/90 hover:text-white text-sm">モード</a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="block text-white/90 hover:text-white text-sm">特徴</a>
          <a href="#download" onClick={() => setMenuOpen(false)} className="block text-center px-5 py-2 bg-white text-[#e8461e] rounded-full text-sm font-bold">ダウンロード</a>
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-[#f25c2a] via-[#e8461e] to-[#d63a14] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
              本音、<br className="sm:hidden" />バレたら負け。
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-8">
              スマホ1台・通信なし・アカウント不要
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#e8461e] rounded-full font-bold text-sm hover:bg-white/90 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-full font-bold text-sm hover:bg-white/30 transition-colors border border-white/30"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                Google Play
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-64 sm:w-72 md:w-80">
            <img
              src="/images/apps/themejinro/01-hero.png"
              alt="ホンネ人狼のメイン画面"
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-12 md:mt-16">
          {[
            { icon: '📡', text: '通信不要' },
            { icon: '🔒', text: '覗き見防止' },
            { icon: '🎉', text: '102+のお題' },
            { icon: '⚡', text: '即プレイ' },
          ].map((badge) => (
            <span key={badge.text} className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm text-white rounded-full text-sm border border-white/20">
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const problems = [
    { emoji: '😶', text: '会話が途切れて気まずい沈黙' },
    { emoji: '🤔', text: '初対面の人と何を話せばいいかわからない' },
    { emoji: '😅', text: '深い話をしたいけど切り出せない' },
    { emoji: '📱', text: '通信が必要なゲームは準備がめんどう' },
  ]

  return (
    <section className="bg-[#1e1e2e] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-12">
          飲み会、こんなことない？
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div key={p.text} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <div className="text-4xl mb-4">{p.emoji}</div>
              <p className="text-white/90 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-2xl sm:text-3xl font-bold text-white">
          全部、<span className="border-b-[3px] border-[#e8461e] pb-1">これ1つで解決する。</span>
        </p>
      </div>
    </section>
  )
}

function ModeCard({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
  bgColor,
}: {
  badge: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  bgColor?: string
}) {
  return (
    <div className={`py-16 md:py-24 ${bgColor || 'bg-white'}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
        <div className="flex-shrink-0 w-52 sm:w-60 md:w-72">
          <img src={imageSrc} alt={imageAlt} className="w-full drop-shadow-xl" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-[#e8461e] text-white text-xs font-bold rounded-full mb-4">{badge}</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ModesSection() {
  return (
    <section id="modes">
      <ModeCard
        badge="通常モード ― 3〜10人"
        title="回答から人狼を見抜け"
        description="テーマに全員が回答。ランダムで選ばれた回答の持ち主が人狼に。「この回答は誰のもの？」を推理する、笑いとスリルの大人数パーティーゲーム。"
        imageSrc="/images/apps/themejinro/03-classic.png"
        imageAlt="通常モードのプレイ画面"
        bgColor="bg-gray-50"
      />
      <div className="h-px bg-gray-200" />
      <ModeCard
        badge="本音ブラフ ― 2人専用"
        title="本音か、嘘か。見抜けるか？"
        description="本音とブラフを1つずつ書いて、相手の本音を見抜く2人専用心理戦。当てたら得点、騙せても得点。サシ飲みでも盛り上がる。"
        imageSrc="/images/apps/themejinro/04-duel.png"
        imageAlt="本音ブラフモードのプレイ画面"
        reverse
      />
      <div className="h-px bg-gray-200" />
      <ModeCard
        badge="合コンモード ― 4〜8人"
        title="チーム対抗で本音を暴け"
        description="2チームに分かれてお題に回答。相手チームの回答が「誰のものか」を当てるチーム対抗戦。合コン・飲み会で自然と距離が縮まる。"
        imageSrc="/images/apps/themejinro/05-goukon.png"
        imageAlt="合コンモードのプレイ画面"
        bgColor="bg-gray-50"
      />
    </section>
  )
}

function HowToPlaySection() {
  const steps = [
    { num: 1, title: 'お題を選ぶ', desc: '100種類以上のプリセット or 自由入力' },
    { num: 2, title: 'スマホを回す', desc: '各自がこっそり回答、覗き見防止つき' },
    { num: 3, title: '推理する', desc: '「この回答は誰のもの？」を議論' },
    { num: 4, title: '盛り上がる', desc: '笑い・驚き・本音トーク' },
  ]

  return (
    <section id="how-to-play" className="bg-[#1e1e2e] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-16">
          準備ゼロ。<span className="text-[#e8461e]">3</span>秒で始まる。
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0 w-52 sm:w-60 md:w-72">
            <img
              src="/images/apps/themejinro/02-zero.png"
              alt="お題設定画面"
              className="w-full drop-shadow-2xl"
            />
          </div>
          <div className="flex-1 space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#e8461e] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { icon: '📡', title: '完全オフライン', desc: 'WiFi不要、圏外でもOK' },
    { icon: '🔒', title: '覗き見防止', desc: '本人確認ダイアログで安心' },
    { icon: '⚡', title: '即プレイ', desc: 'アカウント不要、DLしたらすぐ遊べる' },
    { icon: '🎵', title: '効果音演出', desc: '夜・朝・処刑で臨場感UP' },
    { icon: '💾', title: '中断復帰', desc: 'アプリを閉じても続きから' },
    { icon: '🎯', title: '102+のお題', desc: '5カテゴリ＋自由テーマ' },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-12">
              こだわり、つまってる。
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 w-52 sm:w-60 md:w-64 hidden md:block">
            <img
              src="/images/apps/themejinro/06-features.png"
              alt="ホンネ人狼の特徴"
              className="w-full drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section id="download" className="bg-gradient-to-br from-[#f25c2a] via-[#e8461e] to-[#d63a14] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          今夜の飲み会が、変わる。
        </h2>
        <p className="text-white/70 mb-8">
          無料ダウンロード・通信不要・アカウント登録なし
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 rounded-full font-bold text-sm hover:bg-white/90 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/20 text-white rounded-full font-bold text-sm hover:bg-white/30 transition-colors border border-white/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  )
}

function LegalSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="legal" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-3 text-left"
        >
          <span className="font-bold text-gray-800">プライバシーポリシー・利用規約</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-8 text-sm text-gray-600 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-800 text-base mb-4">プライバシーポリシー</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">1. 収集する情報</h4>
                  <p>本アプリでは、以下の情報を収集することがあります：</p>
                  <ul className="list-disc list-inside mt-1 space-y-1 ml-2">
                    <li>ニックネームなど、ユーザーが任意で入力した情報</li>
                    <li>Firebase AuthenticationやFirestore等を通じて取得される技術的情報</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">2. 利用目的</h4>
                  <p>収集した情報は、以下の目的で利用します：</p>
                  <ul className="list-disc list-inside mt-1 space-y-1 ml-2">
                    <li>アプリの機能提供・改善</li>
                    <li>不正利用の防止・対応</li>
                    <li>ユーザーからのお問い合わせ対応</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">3. 情報の第三者提供</h4>
                  <p>法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">4. 外部サービスの利用</h4>
                  <p>本アプリは以下の外部サービスを利用することがあります：</p>
                  <ul className="list-disc list-inside mt-1 space-y-1 ml-2">
                    <li>Firebase（Google LLC）</li>
                    <li>その他、アプリの品質改善に必要な解析ツール</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">5. 改定</h4>
                  <p>本プライバシーポリシーは必要に応じて変更することがあります。変更内容は本ページにて告知します。</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="font-bold text-gray-800 text-base mb-4">利用規約</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">1. 適用</h4>
                  <p>本規約は、ユーザーが「ホンネ人狼」（以下「本アプリ」）を利用する際の一切の関係に適用されます。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">2. 禁止事項</h4>
                  <p>ユーザーは以下の行為をしてはなりません：</p>
                  <ul className="list-disc list-inside mt-1 space-y-1 ml-2">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>本アプリの運営を妨害する行為</li>
                    <li>リバースエンジニアリング、逆コンパイル等の行為</li>
                    <li>その他、開発者が不適切と判断する行為</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">3. 免責事項</h4>
                  <p>開発者は、本アプリの利用により生じた損害について、故意または重大な過失がない限り一切の責任を負いません。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">4. 規約の変更</h4>
                  <p>本規約は必要に応じて変更することがあります。変更後の利用をもって同意したものとみなします。</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function LandingFooter() {
  return (
    <footer className="bg-[#1a1a1a] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-gray-400 font-bold">ホンネ人狼</span>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#legal" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#legal" className="text-gray-400 hover:text-white transition-colors">利用規約</a>
            <a href={`mailto:${contactEmail}`} className="text-gray-400 hover:text-white transition-colors">お問い合わせ</a>
          </div>
          <span className="text-gray-500 text-sm">&copy; 2026 ホンネ人狼</span>
        </div>
      </div>
    </footer>
  )
}

export default function ThemeJinroLanding() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <ModesSection />
      <HowToPlaySection />
      <FeaturesSection />
      <CTASection />
      <LegalSection />
      <LandingFooter />
      <div className="bg-[#1a1a1a] border-t border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <Link to="/" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
            ← Kukurio Apps トップへ戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
