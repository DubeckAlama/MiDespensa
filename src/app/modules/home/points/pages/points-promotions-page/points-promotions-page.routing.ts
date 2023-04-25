import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsPromotionsPageComponent } from './points-promotions-page.component';

const routes: Routes = [{ path: '', component: PointsPromotionsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointsPromotionsPageRoutingModule {}
