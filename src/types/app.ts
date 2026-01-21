export type AppId = 'flagquiz' | 'shifumiru' | 'themejinro' | 'yataimobile' | 'kachikan'

export type AppColor = 'flagquiz' | 'shifumiru' | 'themejinro' | 'yataimobile' | 'kachikan'

export interface PrivacySection {
  title: string
  content: string
  items?: string[]
}

export interface AppData {
  id: AppId
  name: string
  tagline: string
  description: string
  color: AppColor
  features: string[]
  detailedDescription?: string[]
  challenges?: string[]
  targetUsers?: string[]
  privacyPolicy: PrivacySection[]
  appStoreUrl?: string
}
