import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatYourAccountPageRoutingModule } from './creat-your-account-page.routing';
import { CreatYourAccountPageComponent } from './creat-your-account-page.component';

@NgModule({
  declarations: [CreatYourAccountPageComponent],
  imports: [CommonModule, CreatYourAccountPageRoutingModule],
})
export class CreatYourAccountPageModule {}
