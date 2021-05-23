import { FeaturedPlaylists } from '../entities/FeaturedPlaylist.entity'
import { FeaturedPlaylistsRepository } from '../repositories/FeaturedPlaylists.repository'
import { UseCase } from '../../core/domain/UseCase'

type Response = FeaturedPlaylists

export class BrowseFeaturedPlaylistsUseCase implements UseCase<null, Promise<Response>> {
  constructor(private readonly playlistsRepository: FeaturedPlaylistsRepository) {}
  async execute(): Promise<Response> {
    const featuredPlaylists = await this.playlistsRepository.browseFeaturedPlaylists()
    return featuredPlaylists
  }
}
