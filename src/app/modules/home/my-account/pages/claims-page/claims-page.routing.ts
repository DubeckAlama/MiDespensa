import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsPageComponent } from './claims-page.component';

const routes: Routes = [{ path: '', component: ClaimsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimsPageRoutingModule {}
