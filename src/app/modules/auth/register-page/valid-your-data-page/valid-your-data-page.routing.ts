import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidYourDataPageComponent } from './valid-your-data-page.component';

const routes: Routes = [{ path: '', component: ValidYourDataPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidYourDataPageRoutingModule {}
