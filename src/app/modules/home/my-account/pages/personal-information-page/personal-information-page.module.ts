import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInformationPageRoutingModule } from './personal-information.routing';
import { PersonalInformationPageComponent } from './personal-information-page.component';


@NgModule({
  declarations: [
    PersonalInformationPageComponent
  ],
  imports: [
    CommonModule,
    PersonalInformationPageRoutingModule
  ]
})
export class PersonalInformationPageModule { }
