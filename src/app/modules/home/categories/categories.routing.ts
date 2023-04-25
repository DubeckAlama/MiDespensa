import { AuthGuard } from '@app/core/auth';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: 'categoria',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    component: CategoriesComponent,
    children: [
      {
        path: 'abarrotes',
        loadChildren: () =>
          import(
            './pages/product-category-page/product-category-page.module'
          ).then((m) => m.ProductCategoryPageModule),
      },
      {
        path: 'confiteria',
        loadChildren: () =>
          import(
            './pages/product-category-page/product-category-page.module'
          ).then((m) => m.ProductCategoryPageModule),
      },
      {
        path: 'cuidado-del-hogar',
        loadChildren: () =>
          import(
            './pages/product-category-page/product-category-page.module'
          ).then((m) => m.ProductCategoryPageModule),
      },
      {
        path: 'cuidado-personal',
        loadChildren: () =>
          import(
            './pages/product-category-page/product-category-page.module'
          ).then((m) => m.ProductCategoryPageModule),
      },
      {
        path: 'cuidado-del-bebe',
        loadChildren: () =>
          import(
            './pages/product-category-page/product-category-page.module'
          ).then((m) => m.ProductCategoryPageModule),
      },
      {
        path: 'licores',
        loadChildren: () =>
          import(
            './pages/product-category-page/product-category-page.module'
          ).then((m) => m.ProductCategoryPageModule),
      },
      {
        path: 'mascotas',
        loadChildren: () =>
          import(
            './pages/product-category-page/product-category-page.module'
          ).then((m) => m.ProductCategoryPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
