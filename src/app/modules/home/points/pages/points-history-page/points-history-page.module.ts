import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsHistoryPageRoutingModule } from './points-history-page.routing';
import { PointsHistoryPageComponent } from './points-history-page.component';

@NgModule({
  declarations: [PointsHistoryPageComponent],
  imports: [CommonModule, PointsHistoryPageRoutingModule],
})
export class PointsHistoryPageModule {}
