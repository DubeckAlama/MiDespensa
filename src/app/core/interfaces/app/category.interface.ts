export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface SubCategory {
  name: string;
  tags: Tag[];
}

export interface Tag {
  name: string;
}
