import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootInitialPageComponent } from './root-initial-page.component';

import { InitialSliderComponent } from './components/initial-slider/initial-slider.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CoverageComponent } from './components/coverage/coverage.component';
import { HaveQuestionsComponent } from './components/have-questions/have-questions.component';
import { HowDoesItWorkComponent } from './components/how-does-it-work/how-does-it-work.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RootInitialPageComponent,
    //components for RootInitialPage
    InitialSliderComponent,
    BenefitsComponent,
    CatalogueComponent,
    CoverageComponent,
    HaveQuestionsComponent,
    HowDoesItWorkComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [RootInitialPageComponent],
})
export class RootInitialPageModule {}
