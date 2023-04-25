import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsComponent } from './points.component';
import { AuthGuard } from '@app/core/auth';

const routes: Routes = [
  {
    path: 'mis-puntos',
    component: PointsComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        // !promotions is the default route
        path: '',
        loadChildren: () =>
          import(
            './pages/points-promotions-page/points-promotions-page.module'
          ).then((m) => m.PointsPromotionsPageModule),
      },
      {
        path: 'historial',
        loadChildren: () =>
          import('./pages/points-history-page/points-history-page.module').then(
            (m) => m.PointsHistoryPageModule
          ),
      },
      {
        path: 'ganar-puntos',
        loadChildren: () =>
          import('./pages/earn-points-page/earn-points-page.module').then(
            (m) => m.EarnPointsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointsRoutingModule {}
