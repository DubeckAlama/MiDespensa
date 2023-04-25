import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliatePageComponent } from './affiliate-page.component';

const routes: Routes = [{ path: '', component: AffiliatePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffiliatePageRoutingModule {}
