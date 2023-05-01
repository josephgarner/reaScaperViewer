import type { BeAnObject } from "@typegoose/typegoose/lib/types";

export const buildListing = (listing: BeAnObject) => {
  return {
    id: listing.get("id"),
    badge: listing.get("badge"),
    url: listing.get("url"),
    suburb: listing.get("suburb"),
    state: listing.get("state"),
    postcode: listing.get("postcode"),
    short_address: listing.get("short_address"),
    full_address: listing.get("full_address"),
    property_type: listing.get("property_type"),
    price: listing.get("price"),
    price_text: listing.get("price_text"),
    bedrooms: listing.get("bedrooms"),
    bathrooms: listing.get("bathrooms"),
    parking_spaces: listing.get("parking_spaces"),
    building_size: listing.get("building_size"),
    building_size_unit: listing.get("building_size_unit"),
    land_size: listing.get("land_size"),
    land_size_unit: listing.get("land_size_unit"),
    auction_date: listing.get("auction_date"),
    available_date: listing.get("available_date"),
    sold_date: listing.get("sold_date"),
    scraped_date: listing.get("scraped_date"),
    starred: listing.get("starred"),
  }
};
