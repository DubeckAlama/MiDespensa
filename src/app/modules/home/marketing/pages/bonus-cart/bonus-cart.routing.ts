import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusCartPageComponent } from './bonus-cart-page.component';

const routes: Routes = [{ path: '', component: BonusCartPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonusCartPageRoutingModule {}
