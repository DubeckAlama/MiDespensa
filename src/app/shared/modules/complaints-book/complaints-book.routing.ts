import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintsBookPageComponent } from './complaints-book-page.component';

const routes: Routes = [{ path: '', component: ComplaintsBookPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintsBookRoutingModule {}
