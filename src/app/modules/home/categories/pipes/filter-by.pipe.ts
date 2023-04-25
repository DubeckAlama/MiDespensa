import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@app/core/interfaces';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(
    products: Array<Product>,
    subcategory: Array<string>,
    tags: Array<string>
  ): Array<Product> {
    const ifSubCategoryAndTagsIsEmpty = !subcategory.length && !tags.length;
    const ifSubCategoryContainsDataAndTagsIsEmpty =
      subcategory.length && !tags.length;
    const ifSubCategoryIsEmptyAndTagsContainsData =
      !subcategory.length && tags.length;
    const ifSubCategoryAndTagsContainsData = subcategory.length && tags.length;

    //  if products is empty
    if (!products.length) return [];

    // if subcategory and tags is empty
    if (ifSubCategoryAndTagsIsEmpty) {
      return products;
    }

    // if subcategory contains data and tags is empty
    if (ifSubCategoryContainsDataAndTagsIsEmpty) {
      const productsBySubcategory = products.filter((product: Product) =>
        subcategory.includes(product.subcategory)
      );
      return productsBySubcategory;
    }

    // if subcategory is empty and tags contains data
    if (ifSubCategoryIsEmptyAndTagsContainsData) {
      const productsByTags = products.filter((product: Product) => {
        let tagsProduct = product.tags.map((tag) => tag);
        return tagsProduct.some((tag: string) => tags.includes(tag));
      });

      return productsByTags;
    }

    // if subcategory and tags contains data
    if (ifSubCategoryAndTagsContainsData) {
      const productsBySubcategory: Array<Product> = products.filter(
        (product: Product) => subcategory.includes(product.subcategory)
      );

      const productsByTags: Array<Product> = products.filter(
        (product: Product) => {
          let tagsProduct = product.tags.map((tag) => tag);
          return tagsProduct.some((tag: string) => tags.includes(tag));
        }
      );

      // merge productsBySubcategory and productsByTags
      const productsSubcategoryAndTags: Array<Product> =
        productsBySubcategory.concat(productsByTags);

      // delete duplicates
      const productsBySubcategoryAndTags: Array<Product> =
        productsSubcategoryAndTags.filter((product, index, self) => {
          return (
            index === self.findIndex((sproduct) => sproduct.id === product.id)
          );
        });

      return productsBySubcategoryAndTags;
    }

    return products;
  }
}
