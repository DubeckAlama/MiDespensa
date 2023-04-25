import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckYourPhonePageComponent } from './check-your-phone-page.component';

const routes: Routes = [{ path: '', component: CheckYourPhonePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckYourPhonePageRoutingModule {}
