import { FeaturedPlaylists } from '../entities/FeaturedPlaylist'

export interface PlaylistsRepository {
  browseFeaturedPlaylists(): Promise<FeaturedPlaylists>
}
