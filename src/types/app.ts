export type AppId = string

export type AppColor = string

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
  sceneImageUrl?: string
  privacyPolicy: PrivacySection[]
  appStoreUrl?: string
}
