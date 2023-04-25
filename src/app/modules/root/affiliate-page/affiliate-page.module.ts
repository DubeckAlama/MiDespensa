import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliatePageRoutingModule } from './affiliate-page.routing';
import { AffiliatePageComponent } from './affiliate-page.component';

@NgModule({
  declarations: [AffiliatePageComponent],
  imports: [CommonModule, AffiliatePageRoutingModule],
})
export class AffiliatePageModule {}
