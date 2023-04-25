import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingAddressPageComponent } from './billing-address-page.component';

const routes: Routes = [{ path: '', component: BillingAddressPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingAddressPageRoutingModule {}
