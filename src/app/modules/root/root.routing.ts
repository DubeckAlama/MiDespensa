import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../main-page/main-page.module').then((m) => m.MainPageModule),
      },

      {
        path: 'libro-de-reclamaciones',
        loadChildren: () =>
          import(
            '@shared-modules/complaints-book/complaints-book-page.module'
          ).then((m) => m.ComplaintsBookPageModule),
      },
      {
        path: 'terminos-y-condiciones',
        loadChildren: () =>
          import(
            '@shared-modules/terms-and-conditions/terms-and-conditions-page.module'
          ).then((m) => m.TermsAndConditionsPageModule),
      },
      {
        path: 'preguntas-frecuentes',
        loadChildren: () =>
          import(
            '@shared-modules/frequent-questions/frequent-questions-page.module'
          ).then((m) => m.FrequentQuestionsPageModule),
      },
      {
        path: 'acerca-de',
        loadChildren: () =>
          import('@shared-modules/about/about-page.module').then(
            (m) => m.AboutPageModule
          ),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'afiliate',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./affiliate-page/affiliate-page.module').then(
            (m) => m.AffiliatePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
