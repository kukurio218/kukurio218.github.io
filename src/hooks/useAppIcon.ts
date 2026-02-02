import { useState, useEffect } from 'react'
import { extractAppId, fetchAppIcon } from '../utils/appStore'

interface UseAppIconResult {
  iconUrl: string | null
  isLoading: boolean
  error: Error | null
}

export function useAppIcon(appStoreUrl?: string): UseAppIconResult {
  const [iconUrl, setIconUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(() => !!appStoreUrl)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!appStoreUrl) {
      setIconUrl(null)
      setIsLoading(false)
      setError(null)
      return
    }

    const appId = extractAppId(appStoreUrl)
    if (!appId) {
      setIconUrl(null)
      setIsLoading(false)
      setError(new Error('Invalid App Store URL'))
      return
    }

    setIsLoading(true)
    setError(null)

    fetchAppIcon(appId)
      .then((url) => {
        setIconUrl(url)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err instanceof Error ? err : new Error('Failed to fetch icon'))
        setIsLoading(false)
      })
  }, [appStoreUrl])

  return { iconUrl, isLoading, error }
}
