import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth';
import { MarketingComponent } from './marketing.component';

const routes: Routes = [
  {
    path: '',
    component: MarketingComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: 'promociones',
        loadChildren: () =>
          import('./pages/promotions/promotions.module').then(
            (m) => m.PromotionsPageModule
          ),
      },
      {
        path: 'descuentos',
        loadChildren: () =>
          import('./pages/discounts/discounts.module').then(
            (m) => m.DiscountsPageModule
          ),
      },
      {
        path: 'bonificaciones',
        loadChildren: () =>
          import('./pages/bonuses/bonuses.module').then(
            (m) => m.BonusesPageModule
          ),
      },
    ],
  },
  {
    path: 'bonificaciones/carrito',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/bonus-cart/bonus-cart.module').then(
        (m) => m.BonusCartPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingRoutingModule {}
