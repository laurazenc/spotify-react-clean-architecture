import { Playlist } from './Playlist.entity'

export interface FeaturedPlaylists {
  message: string
  playlists: Playlist[]
}
