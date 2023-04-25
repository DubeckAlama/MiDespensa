import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavbarComponent } from './home-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeNavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeNavbarComponent],
})
export class HomeNavbarModule {}
