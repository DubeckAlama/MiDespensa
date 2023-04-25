import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeInitialPageComponent } from './home-initial-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//NGX-BOOTSTRAP
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalHomeComponent } from './components/modal-home/modal-home.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [HomeInitialPageComponent, ModalHomeComponent, SliderComponent],
  imports: [
    CommonModule,
    RouterModule,
    // NGX-BOOTSTRAP
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  exports: [HomeInitialPageComponent],
})
export class HomeInitialPageModule {}
