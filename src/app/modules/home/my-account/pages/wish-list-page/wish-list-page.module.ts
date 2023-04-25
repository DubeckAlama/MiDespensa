import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListPageRoutingModule } from './wish-list-page.routing';
import { WishListPageComponent } from './wish-list-page.component';
import { ProductCardModule } from '@shared-components/product-card/product-card.module';


@NgModule({
  declarations: [
    WishListPageComponent
  ],
  imports: [
    CommonModule,
    WishListPageRoutingModule,
    ProductCardModule,
  ]
})
export class WishListPageModule { }
