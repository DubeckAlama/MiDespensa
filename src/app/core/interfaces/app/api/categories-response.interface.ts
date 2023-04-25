import { Category, SubCategory } from '@app/core/interfaces';

export interface ResCategories extends Category {
  subcategories: SubCategory[];
}
