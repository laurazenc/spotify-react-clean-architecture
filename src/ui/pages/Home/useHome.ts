import { FeaturedPlaylists } from '@/domain/spotify/browse/featured-playlists'
import { useEffect, useState } from 'react'
import { HomeProps } from '.'

export function useHome({ browseFeaturedPlaylists }: HomeProps): Record<string, any> {
  const [featuredPlaylists, setFeaturedPlaylists] = useState<FeaturedPlaylists>()

  useEffect(() => {
    browseFeaturedPlaylists.load().then((responseFeaturedPlaylists: FeaturedPlaylists) => {
      setFeaturedPlaylists(responseFeaturedPlaylists)
    })
  }, [])

  return {
    featuredPlaylists,
  }
}
