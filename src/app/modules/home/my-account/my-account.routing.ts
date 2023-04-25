import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';
import { AuthGuard } from '@app/core/auth';

const routes: Routes = [
  {
    path: 'mi-cuenta',
    component: MyAccountComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: 'perfil',
        loadChildren: () =>
          import(
            './pages/personal-information-page/personal-information-page.module'
          ).then((m) => m.PersonalInformationPageModule),
      },
      {
        path: 'direccion-de-entrega',
        loadChildren: () =>
          import(
            './pages/delivery-address-page/delivery-address-page.module'
          ).then((m) => m.DeliveryAddressPageModule),
      },
      {
        path: 'direccion-de-factura',
        loadChildren: () =>
          import(
            './pages/billing-address-page/billing-address-page.module'
          ).then((m) => m.BillingAddressPageModule),
      },
      {
        path: 'pedidos',
        loadChildren: () =>
          import('./pages/my-orders-page/my-orders-page.module').then(
            (m) => m.MyOrdersPageModule
          ),
      },
      {
        path: 'lista-de-deseos',
        loadChildren: () =>
          import('./pages/wish-list-page/wish-list-page.module').then(
            (m) => m.WishListPageModule
          ),
      },
      {
        path: 'reclamos',
        loadChildren: () =>
          import('./pages/claims-page/claims-page.module').then(
            (m) => m.ClaimsPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'perfil',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'mi-cuenta/pedidos/detalle/:id',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import(
        './pages/my-orders-page/request-detail-page/request-detail-page.module'
      ).then((m) => m.RequestDetailPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountRoutingModule {}
