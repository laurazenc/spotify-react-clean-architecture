interface Playlists {
  href: string
  // items: Item[]
  items: any[]
  limit: number
  next?: string | null
  offset: number
  previous?: string | null
  total: number
}

export interface FeaturedPlaylists {
  message: string
  playlists: Playlists
}
