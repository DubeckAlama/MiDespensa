import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestDetailPageRoutingModule } from './request-detail-page.routing';
import { RequestDetailPageComponent } from './request-detail-page.component';

import { HomeHeaderModule } from '@layouts/home/common/home-header/home-header.module';
import { HomeNavbarModule } from '@layouts/home/common/home-navbar/home-navbar.module';
import { FooterModule } from '@layouts/common/footer/footer.module';
import { BreadcrumbsModule } from '@shared-components/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [
    RequestDetailPageComponent
  ],
  imports: [
    CommonModule,
    RequestDetailPageRoutingModule,
    //components layouts
    HomeHeaderModule,
    HomeNavbarModule,
    FooterModule,
    // shared components
    BreadcrumbsModule,
  ]
})
export class RequestDetailPageModule { }
