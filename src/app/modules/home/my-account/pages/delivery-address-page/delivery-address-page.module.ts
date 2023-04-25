import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryAddressPageRoutingModule } from './delivery-address-page.routing';
import { DeliveryAddressPageComponent } from './delivery-address-page.component';


@NgModule({
  declarations: [
    DeliveryAddressPageComponent
  ],
  imports: [
    CommonModule,
    DeliveryAddressPageRoutingModule
  ]
})
export class DeliveryAddressPageModule { }
