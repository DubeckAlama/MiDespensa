export interface Product {
  id: number;
  name: string;
  trademark: string;
  price: number;
  measure: string
  image: string;
  category: string;
  subcategory: string;
  tags: string[];
}

// type class css
export interface TypeProductCard {
  [index: string]: string;
  '1': string;
  '2': string;
}
