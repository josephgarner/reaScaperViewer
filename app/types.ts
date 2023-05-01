export type ListingData = {
  id: string
  badge?: string
  url: string
  suburb: string
  state: string
  postcode: string
  short_address?: string
  full_address?: string
  property_type?: string
  price?: number
  price_text?: string
  bedrooms?: number
  bathrooms?: number
  parking_spaces?: number
  building_size?: number
  building_size_unit?: string
  land_size?: number
  land_size_unit?: string
  auction_date?: string
  available_date?: string
  sold_date?: string
  scraped_date: Date
  starred: boolean
}

export type Matched = {
  sold: ListingData
  buy: ListingData
}

export type SearchParams = {
  suburbs: string[]
  addressQuery?: string
}
