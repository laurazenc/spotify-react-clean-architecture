import { HttpClient } from '@/data/protocols/http/http-client'
import { BrowseFeaturedPlaylists } from '@/domain/usecases'

export class BrowseFeaturedPlaylistsUseCase implements BrowseFeaturedPlaylists {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<any>) {}

  async load(): Promise<BrowseFeaturedPlaylists.Model> {
    const httpResponse = await this.httpClient.request({
      method: 'GET',
      url: this.url,
    })
    return httpResponse
  }
}
