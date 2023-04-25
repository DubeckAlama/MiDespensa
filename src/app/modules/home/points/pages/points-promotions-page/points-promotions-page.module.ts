import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsPromotionsPageRoutingModule } from './points-promotions-page.routing';
import { PointsPromotionsPageComponent } from './points-promotions-page.component';
import { ProductCardModule } from '@shared-components/product-card/product-card.module';

@NgModule({
  declarations: [PointsPromotionsPageComponent],
  imports: [CommonModule, PointsPromotionsPageRoutingModule, ProductCardModule],
})
export class PointsPromotionsPageModule {}
