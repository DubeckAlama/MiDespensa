import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersPageRoutingModule } from './my-orders-page.routing';
import { MyOrdersPageComponent } from './my-orders-page.component';

@NgModule({
  declarations: [MyOrdersPageComponent],
  imports: [CommonModule, MyOrdersPageRoutingModule],
})
export class MyOrdersPageModule {}
