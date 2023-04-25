import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarnPointsPageRoutingModule } from './earn-points-page.routing';
import { EarnPointsPageComponent } from './earn-points-page.component';


@NgModule({
  declarations: [EarnPointsPageComponent],
  imports: [
    CommonModule,
    EarnPointsPageRoutingModule
  ]
})
export class EarnPointsPageModule { }
