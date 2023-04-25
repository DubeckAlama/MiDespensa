import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckYourPhonePageRoutingModule } from './check-your-phone-page.routing';
import { CheckYourPhonePageComponent } from './check-your-phone-page.component';


@NgModule({
  declarations: [
    CheckYourPhonePageComponent
  ],
  imports: [
    CommonModule,
    CheckYourPhonePageRoutingModule
  ]
})
export class CheckYourPhonePageModule { }
