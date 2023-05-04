import { getModelForClass } from "@typegoose/typegoose";
import type { ListingData } from "~/types";
import { buildListing } from "~/utils/buildListing";
import Buy_Listings from "../models/buy_listings";
import { format } from "date-fns";

const BuyListingModel = getModelForClass(Buy_Listings);
export async function getBuyListings(): Promise<ListingData[]> {
  const items = await BuyListingModel.find();

  items.sort((a, b) => (a.scraped_date > b.scraped_date ? -1 : a.scraped_date > b.scraped_date ? 1 : 0));

  const accumulator: ListingData[] = [];

  items.forEach((currentElement) => {
    accumulator.push({
      ...buildListing(currentElement),
      scraped_date: format(new Date(currentElement.scraped_date).setHours(-10), "MMM do yyyy"),
    });
  });

  return items ? accumulator : [];
}
