import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishListPageComponent } from './wish-list-page.component';

const routes: Routes = [{ path: '', component: WishListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishListPageRoutingModule {}
