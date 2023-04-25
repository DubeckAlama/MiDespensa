import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { MyAccountComponent } from './my-account.component';
import { NavbarMyaccountComponent } from './components/navbar-myaccount/navbar-myaccount.component';

//my modules
import { MyAccountRoutingModule } from './my-account.routing';
import { HomeHeaderModule } from '@layouts/home/common/home-header/home-header.module';
import { HomeNavbarModule } from '@layouts/home/common/home-navbar/home-navbar.module';
import { FooterModule } from '@layouts/common/footer/footer.module';
import { BreadcrumbsModule } from '@shared-components/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [MyAccountComponent, NavbarMyaccountComponent],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    //components layouts
    HomeHeaderModule,
    HomeNavbarModule,
    FooterModule,
    // shared components
    BreadcrumbsModule,
  ],
})
export class MyAccountModule {}
