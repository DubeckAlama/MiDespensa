import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrequentQuestionsPageComponent } from './frequent-questions-page.component';

const routes: Routes = [
  { path: '', component: FrequentQuestionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrequentQuestionsRoutingModule {}
