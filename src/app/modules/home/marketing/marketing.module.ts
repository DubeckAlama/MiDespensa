import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingComponent } from './marketing.component';
import { MarketingRoutingModule } from './marketing.routing';

import { BreadcrumbsModule } from '@shared-components/breadcrumbs/breadcrumbs.module';
import { ListingBoxModule } from '@shared-components/listing-box/listing-box.module';
import { HomeNavbarModule } from '@layouts/home/common/home-navbar/home-navbar.module';
import { FooterModule } from '@layouts/common/footer/footer.module';
import { HomeHeaderModule } from '@layouts/home/common/home-header/home-header.module';

@NgModule({
  declarations: [MarketingComponent],
  imports: [
    CommonModule,
    MarketingRoutingModule,

    HomeHeaderModule,
    HomeNavbarModule,
    BreadcrumbsModule,
    ListingBoxModule,
    FooterModule,
  ],
})
export class MarketingModule {}
