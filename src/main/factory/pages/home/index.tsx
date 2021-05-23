import React from 'react'
import { Home } from '@/presentation/pages'

import { makeApiUrl, makeHttpClient } from '../../http'
import { FeaturedPlaylistsImpl } from '@/data/repositories/FeaturedPlaylistsImpl.repository'
import { BrowseFeaturedPlaylistsUseCase } from '@/domain'

export const HomePageFactory: React.FunctionComponent = () => {
  const featuredPlaylistsRepository = new FeaturedPlaylistsImpl(
    makeApiUrl('/browse/featured-playlists'),
    makeHttpClient(),
  )
  const browseFeaturedPlaylists = new BrowseFeaturedPlaylistsUseCase(featuredPlaylistsRepository)
  return <Home browseFeaturedPlaylists={browseFeaturedPlaylists} />
}
