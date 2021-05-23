export interface Playlist {
  href: string
  // items: Item[]
  items: any[]
  limit: number
  next?: string | null
  offset: number
  previous?: string | null
  total: number
}
