import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountRoutingModule } from './my-account/my-account.routing';
import { CategoriesRoutingModule } from './categories/categories.routing';
import { MarketingRoutingModule } from './marketing/marketing.routing';
import { AuthGuard } from '@app/core/auth';
import { PointsRoutingModule } from './points/points.routing';

const routes: Routes = [
  {
    path: 'resultados',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'carrito',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MyAccountRoutingModule,
    CategoriesRoutingModule,
    MarketingRoutingModule,
    PointsRoutingModule,
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
