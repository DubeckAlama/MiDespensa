import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page.routing';
import { MainPageComponent } from './main-page.component';

import { RootInitialPageModule } from './root-initial-page/root-initial-page.module';
import { HomeInitialPageModule } from './home-initial-page/home-initial-page.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    /*
    pages to display according to authentication status
    */
    RootInitialPageModule,
    HomeInitialPageModule,

  ],
})
export class MainPageModule {}
