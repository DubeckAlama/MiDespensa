import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search.routing';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { SearchPageComponent } from './search-page.component';

import { HomeHeaderModule } from '@layouts/home/common/home-header/home-header.module';
import { HomeNavbarModule } from '@layouts/home/common/home-navbar/home-navbar.module';
import { FooterModule } from '@layouts/common/footer/footer.module';
import { ProductCardModule } from '@shared-components/product-card/product-card.module';

@NgModule({
  declarations: [ProductFiltersComponent, SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    // layouts > common
    HomeHeaderModule,
    HomeNavbarModule,
    FooterModule,
    // shared-components
    ProductCardModule,
  ],
})
export class SearchPageModule {}
