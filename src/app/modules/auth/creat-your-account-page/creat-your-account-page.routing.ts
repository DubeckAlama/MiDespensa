import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatYourAccountPageComponent } from './creat-your-account-page.component';

const routes: Routes = [{ path: '', component: CreatYourAccountPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatYourAccountPageRoutingModule {}
