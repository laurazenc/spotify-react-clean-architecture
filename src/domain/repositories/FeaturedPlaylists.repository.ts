import { FeaturedPlaylists } from '../entities/FeaturedPlaylist.entity'

export interface FeaturedPlaylistsRepository {
  browseFeaturedPlaylists(): Promise<FeaturedPlaylists>
}
