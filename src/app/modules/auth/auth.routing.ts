import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      //TODO: I want to be a client
      {
        path: 'register',
        loadChildren: () =>
          import('./register-page/register-page.module').then(
            (m) => m.RegisterPageModule
          ),
      },
      {
        path: 'valida-tus-datos',
        loadChildren: () =>
          import(
            './register-page/valid-your-data-page/valid-your-data-page.module'
          ).then((m) => m.ValidYourDataPageModule),
      },
      {
        path: 'direccion-de-entrega',
        loadChildren: () =>
          import(
            './register-page/delivery-address-page/delivery-address-page.module'
          ).then((m) => m.DeliveryAddressPageModule),
      },

      //TODO: I'm already a customer
      {
        path: 'valida-tu-identidad',
        loadChildren: () =>
          import(
            './validate-your-indentity-page/validate-your-indentity-page.module'
          ).then((m) => m.ValidateYourIndentityPageModule),
      },
      {
        path: 'verifica-tu-telefono',
        loadChildren: () =>
          import('./check-your-phone-page/check-your-phone-page.module').then(
            (m) => m.CheckYourPhonePageModule
          ),
      },
      {
        path: 'crea-tu-cuenta',
        loadChildren: () =>
          import(
            './creat-your-account-page/creat-your-account-page.module'
          ).then((m) => m.CreatYourAccountPageModule),
      },

      //TODO: Access to the system
      {
        path: 'login',
        loadChildren: () =>
          import('./login-page/login-page.module').then(
            (m) => m.LoginPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
