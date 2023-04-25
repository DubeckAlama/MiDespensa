import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsPageRoutingModule } from './claims-page.routing';
import { ClaimsPageComponent } from './claims-page.component';
// components
import { ClaimsHistoryComponent } from './components/claims-history/claims-history.component';
import { NewClaimFormComponent } from './components/new-claim-form/new-claim-form.component';
import { RegisteredClaimComponent } from './components/registered-claim/registered-claim.component';

@NgModule({
  declarations: [
    ClaimsPageComponent,
    // components
    ClaimsHistoryComponent,
    NewClaimFormComponent,
    RegisteredClaimComponent,
  ],
  imports: [CommonModule, ClaimsPageRoutingModule],
})
export class ClaimsPageModule {}
