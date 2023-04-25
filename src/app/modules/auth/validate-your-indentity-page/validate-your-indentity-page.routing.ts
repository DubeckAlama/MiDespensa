import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateYourIndentityPageComponent } from './validate-your-indentity-page.component';

const routes: Routes = [
  { path: '', component: ValidateYourIndentityPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateYourIndentityPageRoutingModule {}
