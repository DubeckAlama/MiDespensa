import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountsRoutingModule } from './discounts.routing';
import { DiscountsPageComponent } from './discounts-page.component';

import { ProductCardModule } from '@shared-components/product-card/product-card.module';

@NgModule({
  declarations: [DiscountsPageComponent],
  imports: [
    CommonModule,
    DiscountsRoutingModule,

    // components
    ProductCardModule,
  ],
})
export class DiscountsPageModule {}
