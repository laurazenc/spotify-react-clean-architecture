import browseFeaturedPlaylistsMock from './browse-featured-playlists.json'

const mapper: Record<string, any> = {
  'https://api.spotify.com/v1/browse/featured-playlists': browseFeaturedPlaylistsMock,
}

export function getMockedResponse(url: string): Record<string, any> {
  return mapper[url] as Record<string, any>
}
