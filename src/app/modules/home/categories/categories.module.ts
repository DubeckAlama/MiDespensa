import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories.routing';
import { CategoriesComponent } from './categories.component';

import { HomeHeaderModule } from '@layouts/home/common/home-header/home-header.module';
import { HomeNavbarModule } from '@layouts/home/common/home-navbar/home-navbar.module';
import { FooterModule } from '@layouts/common/footer/footer.module';
import { BreadcrumbsModule } from '@shared-components/breadcrumbs/breadcrumbs.module';
import { ListingBoxModule } from '@shared-components/listing-box/listing-box.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    //components layouts
    HomeHeaderModule,
    HomeNavbarModule,
    FooterModule,
    // shared components
    BreadcrumbsModule,
    ListingBoxModule,
  ],
})
export class CategoriesModule {}
