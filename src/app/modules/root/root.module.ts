import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root.routing';
import { RootComponent } from './root.component';

import { HeaderModule } from '@layouts/root/common/header/header.module';
import { NavbarModule } from '@layouts/root/common/navbar/navbar.module';
import { FooterModule } from '@layouts/common/footer/footer.module';
import { MainPageModule } from '../main-page/main-page.module';
import { HomeHeaderModule } from '@layouts/home/common/home-header/home-header.module';
import { HomeNavbarModule } from '@layouts/home/common/home-navbar/home-navbar.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    RootRoutingModule,
    MainPageModule,
    // root components
    HeaderModule,
    NavbarModule,
    // home components
    HomeHeaderModule,
    HomeNavbarModule,
    // shared components
    FooterModule,
  ],
  exports: [RootComponent],
})
export class RootModule {}
