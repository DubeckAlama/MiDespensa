import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsRoutingModule } from './promotions.routing';
import { PromotionsPageComponent } from './promotions-page.component';
import { ProductCardModule } from '@shared-components/product-card/product-card.module';


@NgModule({
  declarations: [
    PromotionsPageComponent
  ],
  imports: [
    CommonModule,
    PromotionsRoutingModule,

    // components
    ProductCardModule
  ]
})
export class PromotionsPageModule { }
