import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointsRoutingModule } from './points.routing';
import { PointsComponent } from './points.component';

// components layout
import { HomeHeaderModule } from '@layouts/home/common/home-header/home-header.module';
import { HomeNavbarModule } from '@layouts/home/common/home-navbar/home-navbar.module';
import { FooterModule } from '@layouts/common/footer/footer.module';
import { BreadcrumbsModule } from '@shared-components/breadcrumbs/breadcrumbs.module';
import { DotBoxComponent } from './components/dot-box/dot-box.component';

@NgModule({
  declarations: [PointsComponent, DotBoxComponent],
  imports: [
    CommonModule,
    PointsRoutingModule,
    //!components layouts
    HomeHeaderModule,
    HomeNavbarModule,
    FooterModule,
    // !shared components
    BreadcrumbsModule,
  ],
})
export class PointsModule {}
