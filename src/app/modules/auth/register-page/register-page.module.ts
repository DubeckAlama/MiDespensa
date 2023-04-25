import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterPageRoutingModule } from './register-page.routing';
import { RegisterPageComponent } from './register-page.component';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule
  ],
})
export class RegisterPageModule {}
