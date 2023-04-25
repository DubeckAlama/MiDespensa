import { Component, OnInit } from '@angular/core';
import { BreadCrumbsService } from '@app/core/services';
import { Breadcrumbs } from '@app/core/interfaces';
import { Pathlink, PathName } from '@app/core/enums';

@Component({
  selector: 'md-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.css'],
})
export class WishListPageComponent implements OnInit {
  constructor(private _breadcrumbsService: BreadCrumbsService) {}

  ngOnInit(): void {
    const data: Breadcrumbs = {
      name: PathName.my_account_wish_list,
      path: Pathlink.wish_list,
      active: 'fw-bolder',
    };

    this._breadcrumbsService.showActivePageMyAccount(data);
  }
}
