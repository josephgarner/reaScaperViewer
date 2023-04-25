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

  matchedList.sort((a, b) =>
    a.sold.sold_date!! > b.sold.sold_date!! ? -1 : a.sold.sold_date!! > b.sold.sold_date!! ? 1 : 0
  );

  return matchedList;
}
