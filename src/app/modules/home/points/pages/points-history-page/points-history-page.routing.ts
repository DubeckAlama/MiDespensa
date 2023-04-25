import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsHistoryPageComponent } from './points-history-page.component';

const routes: Routes = [{ path: '', component: PointsHistoryPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointsHistoryPageRoutingModule {}
