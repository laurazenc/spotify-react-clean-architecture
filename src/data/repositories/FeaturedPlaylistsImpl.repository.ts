import { FeaturedPlaylists } from '@/domain/entities/FeaturedPlaylist.entity'
import { FeaturedPlaylistsRepository } from '@/domain/repositories/FeaturedPlaylists.repository'
import { HttpClient } from '../protocols/http'

export class FeaturedPlaylistsImpl implements FeaturedPlaylistsRepository {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<FeaturedPlaylists>) {}
  async browseFeaturedPlaylists(): Promise<FeaturedPlaylists> {
    const httpResponse = await this.httpClient.request({
      method: 'GET',
      url: this.url,
    })
    return httpResponse
  }
}
