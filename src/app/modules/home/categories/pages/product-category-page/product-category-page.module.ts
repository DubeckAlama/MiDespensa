import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCategoryPageRoutingModule } from './product-category-page.routing';
import { ProductCategoryPageComponent } from './product-category-page.component';
import { ProductCardModule } from '@shared-components/product-card/product-card.module';
import { FilterByCategoryPipe } from '../../pipes/filter-by-category.pipe';
import { FilterByPipe } from '../../pipes/filter-by.pipe';

@NgModule({
  declarations: [
    ProductCategoryPageComponent,
    FilterByCategoryPipe,
    FilterByPipe,
  ],
  imports: [
    CommonModule,
    ProductCategoryPageRoutingModule,
    // my components
    ProductCardModule,
  ],
})
export class ProductCategoryPageModule {}
