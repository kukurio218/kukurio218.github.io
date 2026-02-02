/**
 * App Store URLからアプリIDを抽出
 * 例: https://apps.apple.com/jp/app/xxx/id6749706934 → 6749706934
 */
export function extractAppId(appStoreUrl: string): string | null {
  const match = appStoreUrl.match(/\/id(\d+)/)
  return match ? match[1] : null
}

interface ITunesLookupResult {
  resultCount: number
  results: Array<{
    artworkUrl512?: string
    artworkUrl100?: string
    artworkUrl60?: string
  }>
}

/**
 * iTunes Lookup APIからアイコンURLを取得
 * https://itunes.apple.com/lookup?id=XXXXX&country=jp
 */
export async function fetchAppIcon(appId: string): Promise<string | null> {
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${appId}&country=jp`)
    if (!response.ok) {
      return null
    }
    const data: ITunesLookupResult = await response.json()
    if (data.resultCount > 0 && data.results[0]) {
      // 高解像度のアイコンを優先
      return data.results[0].artworkUrl512 || data.results[0].artworkUrl100 || null
    }
    return null
  } catch {
    return null
  }
}
