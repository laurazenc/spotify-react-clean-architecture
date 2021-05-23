import { FeaturedPlaylists } from '../entities/FeaturedPlaylist'
import { PlaylistsRepository } from '../repositories/PlaylistsRepository'
import { UseCase } from '../../core/domain/UseCase'

type Response = FeaturedPlaylists

export class BrowseFeaturedPlaylists implements UseCase<null, Promise<Response>> {
  constructor(private readonly playlistsRepository: PlaylistsRepository) {}
  async execute(): Promise<Response> {
    const featuredPlaylists = await this.playlistsRepository.browseFeaturedPlaylists()
    return featuredPlaylists
  }
}
