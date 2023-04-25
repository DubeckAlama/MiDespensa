import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateYourIndentityPageRoutingModule } from './validate-your-indentity-page.routing';
import { ValidateYourIndentityPageComponent } from './validate-your-indentity-page.component';

@NgModule({
  declarations: [ValidateYourIndentityPageComponent],
  imports: [CommonModule, ValidateYourIndentityPageRoutingModule],
})
export class ValidateYourIndentityPageModule {}
