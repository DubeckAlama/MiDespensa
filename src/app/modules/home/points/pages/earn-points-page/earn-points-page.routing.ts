import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarnPointsPageComponent } from './earn-points-page.component';

const routes: Routes = [{ path: '', component: EarnPointsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarnPointsPageRoutingModule {}
