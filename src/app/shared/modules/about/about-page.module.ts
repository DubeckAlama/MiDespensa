import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about.routing';
import { AboutPageComponent } from './about-page.component';


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutPageModule { }
