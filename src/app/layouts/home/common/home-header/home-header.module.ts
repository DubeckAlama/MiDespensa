import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeHeaderComponent],
})
export class HomeHeaderModule {}
