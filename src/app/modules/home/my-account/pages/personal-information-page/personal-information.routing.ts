import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationPageComponent } from './personal-information-page.component';

const routes: Routes = [
  { path: '', component: PersonalInformationPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInformationPageRoutingModule {}
