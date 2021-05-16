import React from 'react'
import { Home } from '@/ui/pages'
import { browseFeaturedPlaylistsFactory } from '../../usecases'

export const HomePageFactory: React.FunctionComponent = () => {
  const browseFeaturedPlaylists = browseFeaturedPlaylistsFactory()
  return <Home browseFeaturedPlaylists={browseFeaturedPlaylists} />
}
