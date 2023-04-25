import { BonusCartPageComponent } from './bonus-cart-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusCartPageRoutingModule } from './bonus-cart.routing';
import { HomeHeaderModule } from '@layouts/home/common/home-header/home-header.module';
import { HomeNavbarModule } from '@layouts/home/common/home-navbar/home-navbar.module';
import { BreadcrumbsModule } from '@shared-components/breadcrumbs/breadcrumbs.module';
import { FooterModule } from '@layouts/common/footer/footer.module';
// components
import { ProductBonusListingComponent } from './../../components/product-bonus-listing/product-bonus-listing.component';
import { PurchaseDetailComponent } from '../../components/purchase-detail/purchase-detail.component';

@NgModule({
  declarations: [
    BonusCartPageComponent,
    ProductBonusListingComponent,
    PurchaseDetailComponent,
  ],
  imports: [
    CommonModule,
    BonusCartPageRoutingModule,
    HomeHeaderModule,
    HomeNavbarModule,
    BreadcrumbsModule,
    FooterModule,
  ],
})
export class BonusCartPageModule {}
