import { getModelForClass } from "@typegoose/typegoose";
import type { ListingData } from "~/types";
import { buildListing } from "~/utils/buildListing";
import Buy_Listings from "../models/buy_listings";

const BuyListingModel = getModelForClass(Buy_Listings);
export async function getBuyListings(): Promise<ListingData[]> {
  const items = await BuyListingModel.find();

  const accumulator: ListingData[] = [];

  items.forEach((currentElement) => {
    const matcher = accumulator.find((e) => e.id == currentElement.id);
    if (matcher) {
      if (matcher.scraped_date < currentElement.get("scraped_date")) {
        const index = accumulator.findIndex((e) => e.id === matcher.id);
        accumulator.splice(index, 1);
        accumulator.push(buildListing(currentElement));
      }
    } else accumulator.push(buildListing(currentElement));
  });

  accumulator.sort((a, b) => (a.scraped_date > b.scraped_date ? -1 : a.scraped_date > b.scraped_date ? 1 : 0));

  return items ? accumulator : [];
}
