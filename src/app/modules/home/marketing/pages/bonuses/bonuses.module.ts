import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusesRoutingModule } from './bonuses.routing';
import { BonusesPageComponent } from './bonuses-page.component';
import { ProductCardModule } from '@shared-components/product-card/product-card.module';

@NgModule({
  declarations: [BonusesPageComponent],
  imports: [
    CommonModule,
    BonusesRoutingModule,

    // components
    ProductCardModule,
  ],
})
export class BonusesPageModule {}
