export interface ListingBox {
  name: string;
  active: boolean;
  sub_items: Array<SubItem>;
}

export interface SubItem {
  name: string;
  active: boolean;
}
