import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestDetailPageComponent } from './request-detail-page.component';

const routes: Routes = [{ path: '', component: RequestDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestDetailPageRoutingModule {}
