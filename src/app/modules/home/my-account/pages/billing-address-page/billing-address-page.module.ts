import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingAddressPageRoutingModule } from './billing-address-page.routing';
import { BillingAddressPageComponent } from './billing-address-page.component';


@NgModule({
  declarations: [
    BillingAddressPageComponent
  ],
  imports: [
    CommonModule,
    BillingAddressPageRoutingModule
  ]
})
export class BillingAddressPageModule { }
