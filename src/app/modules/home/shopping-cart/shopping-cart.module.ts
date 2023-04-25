import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart.routing';
import { ShoppingCartPageComponent } from './shopping-cart-page.component';

// components layout
import { HomeHeaderModule } from '@layouts/home/common/home-header/home-header.module';
import { HomeNavbarModule } from '@layouts/home/common/home-navbar/home-navbar.module';
import { FooterModule } from '@layouts/common/footer/footer.module';
import { BreadcrumbsModule } from '@shared-components/breadcrumbs/breadcrumbs.module';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { DetailsPaneComponent } from './pages/details-pane/details-pane.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { EmptyPaneComponent } from './components/empty-pane/empty-pane.component';
import { EmptyBasketComponent } from './components/empty-basket/empty-basket.component';

@NgModule({
  declarations: [ShoppingCartPageComponent, ProductListingComponent, DetailsPaneComponent, ProductItemComponent, EmptyPaneComponent, EmptyBasketComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    //!components layouts
    HomeHeaderModule,
    HomeNavbarModule,
    FooterModule,
    // !shared components
    BreadcrumbsModule,
  ],
})
export class ShoppingCartModule {}
