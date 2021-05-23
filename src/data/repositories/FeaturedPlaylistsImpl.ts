import { FeaturedPlaylists } from '@/domain/entities/FeaturedPlaylist'
import { PlaylistsRepository } from '@/domain/repositories/PlaylistsRepository'
import { HttpClient } from '../protocols/http'

export class FeaturedPlaylistsImpl implements PlaylistsRepository {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<FeaturedPlaylists>) {}
  async browseFeaturedPlaylists(): Promise<FeaturedPlaylists> {
    const httpResponse = await this.httpClient.request({
      method: 'GET',
      url: this.url,
    })
    return httpResponse
  }
}
