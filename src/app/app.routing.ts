import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { RootRoutingModule } from './modules/root/root.routing';
import { AuthRoutingModule } from './modules/auth/auth.routing';
import { HomeRoutingModule } from './modules/home/home.routing';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 100],
};

const routes: Routes = [
  {
    path: '**',
    loadChildren: () =>
      import('./modules/page-error/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions),
    RootRoutingModule,
    AuthRoutingModule,
    HomeRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
