import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsBookRoutingModule } from './complaints-book.routing';
import { ComplaintsBookPageComponent } from './complaints-book-page.component';

@NgModule({
  declarations: [ComplaintsBookPageComponent],
  imports: [CommonModule, ComplaintsBookRoutingModule],
})
export class ComplaintsBookPageModule {}
