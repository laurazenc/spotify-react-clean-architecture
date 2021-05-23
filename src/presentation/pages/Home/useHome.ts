import { FeaturedPlaylists } from '@/domain/entities/FeaturedPlaylist.entity'
import { useEffect, useState } from 'react'
import { HomeProps } from '.'

export function useHome({ browseFeaturedPlaylists }: HomeProps): Record<string, any> {
  const [featuredPlaylists, setFeaturedPlaylists] = useState<FeaturedPlaylists>()
  useEffect(() => {
    browseFeaturedPlaylists.execute().then((responseFeaturedPlaylists: FeaturedPlaylists) => {
      setFeaturedPlaylists(responseFeaturedPlaylists)
    })
  }, [])

  return {
    featuredPlaylists,
  }
}
