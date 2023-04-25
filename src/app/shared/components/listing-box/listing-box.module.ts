import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ListingBoxComponent } from './listing-box.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListingBoxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ListingBoxComponent],
  providers: [TitleCasePipe],
})
export class ListingBoxModule {}
