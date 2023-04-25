import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndConditionsRoutingModule } from './terms-and-conditions.routing';
import { TermsAndConditionsPageComponent } from './terms-and-conditions-page.component';


@NgModule({
  declarations: [
    TermsAndConditionsPageComponent
  ],
  imports: [
    CommonModule,
    TermsAndConditionsRoutingModule
  ]
})
export class TermsAndConditionsPageModule { }
