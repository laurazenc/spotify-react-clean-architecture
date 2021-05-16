import { BrowseFeaturedPlaylistsUseCase } from '@/data/usecases'
import { makeHttpClient, makeApiUrl } from '../http'

export const browseFeaturedPlaylistsFactory = () =>
  new BrowseFeaturedPlaylistsUseCase(makeApiUrl('/browse/featured-playlists'), makeHttpClient())
