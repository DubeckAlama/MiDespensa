import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersPageComponent } from './my-orders-page.component';

const routes: Routes = [{ path: '', component: MyOrdersPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOrdersPageRoutingModule {}
