import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryAddressPageComponent } from './delivery-address-page.component';

const routes: Routes = [{ path: '', component: DeliveryAddressPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryAddressPageRoutingModule {}
