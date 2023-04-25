import { MarketingModule } from './marketing/marketing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { MyAccountModule } from './my-account/my-account.module';
import { CategoriesModule } from './categories/categories.module';
import { PointsModule } from './points/points.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // modules > pages contained by the home
    MyAccountModule,
    CategoriesModule,
    MarketingModule,
    PointsModule
  ],
})
export class HomeModule {}
