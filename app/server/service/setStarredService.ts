import { getModelForClass } from "@typegoose/typegoose";
import Buy_Listings from "../models/buy_listings";

const BuyListingModel = getModelForClass(Buy_Listings);
export async function setStarredStatus(id: string, starred: boolean): Promise<boolean> {
  const data = await BuyListingModel.updateMany({ id: id }, { starred: starred });
  return data.modifiedCount > 0;
}
