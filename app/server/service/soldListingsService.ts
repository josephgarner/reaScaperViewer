import { getModelForClass } from "@typegoose/typegoose";
import type { ListingData } from "~/types";
import { buildListing } from "~/utils/buildListing";
import Sold_Listings from "../models/sold_listings";

const SoldListingModel = getModelForClass(Sold_Listings);
export async function getSoldListings(): Promise<ListingData[]> {
  const items = await SoldListingModel.find();

  const accumulator: ListingData[] = [];

  items.sort((a, b) => {
    const aDate = new Date(a.sold_date!!.toString());
    const bDate = new Date(b.sold_date!!.toString());
    return aDate > bDate ? -1 : aDate > bDate ? 1 : 0;
  });

  items.forEach((currentElement) => {
    accumulator.push(buildListing(currentElement));
  });

  return items ? accumulator : [];
}
