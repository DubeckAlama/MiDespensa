import { Pipe, PipeTransform } from '@angular/core';
import { Product} from '@app/core/interfaces';

@Pipe({
  name: 'filterProducts',
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(products: Array<Product>, category: string): Array<Product> {
    //  if products is empty
    if (!products.length) return [];

    const productsByCategory = products.filter(
      (product: Product) => product.category == category
    );

    return productsByCategory;
  }
}
