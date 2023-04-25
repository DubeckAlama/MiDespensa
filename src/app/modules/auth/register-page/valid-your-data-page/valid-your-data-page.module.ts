import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ValidYourDataPageRoutingModule } from './valid-your-data-page.routing';
import { ValidYourDataPageComponent } from './valid-your-data-page.component';

@NgModule({
  declarations: [ValidYourDataPageComponent],
  imports: [CommonModule, ReactiveFormsModule, ValidYourDataPageRoutingModule],
})
export class ValidYourDataPageModule {}
