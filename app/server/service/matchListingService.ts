import type { Matched } from "~/types";
import { getBuyListings } from "./buyListingsService";
import { getSoldListings } from "./soldListingsService";

export async function getMatchedListings(): Promise<Matched[]> {
  const buyItems = await getBuyListings();
  const soldItems = await getSoldListings();

  const matchedList = buyItems.reduce<Matched[]>((newList, currentListing) => {
    const matched = soldItems.find((e) => e.id === currentListing.id);
    if (matched) {
      newList.push({ sold: matched, buy: currentListing });
    }
    return newList;
  }, []);

  matchedList.sort((a, b) => {
    const aDate = new Date(a.sold.sold_date!!.toString());
    const bDate = new Date(b.sold.sold_date!!.toString());
    return aDate > bDate ? -1 : aDate > bDate ? 1 : 0;
  });

  return matchedList;
}
