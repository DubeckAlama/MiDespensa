import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryAddressPageRoutingModule } from './delivery-address-page.routing';
import { DeliveryAddressPageComponent } from './delivery-address-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeliveryAddressPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DeliveryAddressPageRoutingModule,
  ],
})
export class DeliveryAddressPageModule {}
