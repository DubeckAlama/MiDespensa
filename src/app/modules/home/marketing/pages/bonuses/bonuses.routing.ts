import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusesPageComponent } from './bonuses-page.component';

const routes: Routes = [{ path: '', component: BonusesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonusesRoutingModule {}
