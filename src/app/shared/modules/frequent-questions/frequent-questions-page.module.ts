import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrequentQuestionsRoutingModule } from './frequent-questions.routing';

import { FrequentQuestionsPageComponent } from './frequent-questions-page.component';
// components of frequents questions
import { CustomerSupportComponent } from './components/customer-support/customer-support.component';

@NgModule({
  declarations: [
    FrequentQuestionsPageComponent,
    // componentss
    CustomerSupportComponent,
  ],
  imports: [CommonModule, FrequentQuestionsRoutingModule],
})
export class FrequentQuestionsPageModule {}
