import { Injectable } from '@angular/core';
import { Breadcrumbs } from '@app/core/interfaces';
import { PathName, Pathlink } from '@app/core/enums';

@Injectable({
  providedIn: 'root',
})
export class BreadCrumbsService {
  private _breadcrumbsData!: Breadcrumbs[];

  constructor() {}
  /*
  accessors getter
*/
  get routeData() {
    if (Array.isArray(this._breadcrumbsData)) {
      return [...this._breadcrumbsData];
    }

    return [];
  }

  // methods
  showActivePageMyAccount(data: Breadcrumbs) {
    this._reset();
    const myAccountModule: Breadcrumbs[] = [
      {
        name: PathName.my_account,
        path: Pathlink.my_account,
        active: '',
      },
      data,
    ];

    this._breadcrumbsData = myAccountModule;
  }

  showActivePageCategories(data: Breadcrumbs) {
    this._reset();

    const CategoriesModule: Breadcrumbs[] = [
      {
        name: PathName.categories,
        path: data.path,
        active: '',
      },
      data,
    ];

    this._breadcrumbsData = CategoriesModule;
  }

  showActivePage(data: Omit<Breadcrumbs, 'active'>) {
    this._reset();

    const page: Breadcrumbs[] = [
      {
        name: data.name,
        path: data.path,
        active: 'fw-bolder',
      },
    ];

    this._breadcrumbsData = page;
  }

  private _reset() {
    this._breadcrumbsData = [];
  }
}
