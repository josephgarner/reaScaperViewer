import { prop } from "@typegoose/typegoose";

export default class Buy_Listings {
  @prop({ type: () => String })
  public id!: String;
  @prop({ type: () => String })
  public badge?: String;
  @prop({ type: () => String })
  public url!: String;
  @prop({ type: () => String })
  public suburb!: String;
  @prop({ type: () => String })
  public state!: String;
  @prop({ type: () => String })
  public postcode!: String;
  @prop({ type: () => String })
  public short_address?: String;
  @prop({ type: () => String })
  public full_address?: String;
  @prop({ type: () => String })
  public property_type?: String;
  @prop({ type: () => Number })
  public price?: Number;
  @prop({ type: () => String })
  public price_text?: String;
  @prop({ type: () => Number })
  public bedrooms?: Number;
  @prop({ type: () => Number })
  public bathrooms?: Number;
  @prop({ type: () => Number })
  public parking_spaces?: Number;
  @prop({ type: () => Number })
  public building_size?: Number;
  @prop({ type: () => String })
  public building_size_unit?: String;
  @prop({ type: () => Number })
  public land_size?: Number;
  @prop({ type: () => String })
  public land_size_unit?: String;
  @prop({ type: () => String })
  public auction_date?: String;
  @prop({ type: () => String })
  public available_date?: String;
  @prop({ type: () => String })
  public sold_date?: String;
  @prop({ type: () => Date })
  public scraped_date!: Date;
}
