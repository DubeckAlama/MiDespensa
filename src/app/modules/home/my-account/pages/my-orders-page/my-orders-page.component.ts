import { Component, OnInit } from '@angular/core';
import { Breadcrumbs } from '@app/core/interfaces';
import { BreadCrumbsService } from '@app/core/services';
import { PathName, Pathlink } from '@app/core/enums';

@Component({
  selector: 'md-my-orders-page',
  templateUrl: './my-orders-page.component.html',
  styleUrls: ['./my-orders-page.component.css'],
})
export class MyOrdersPageComponent implements OnInit {
  constructor(private _breadcrumbsService: BreadCrumbsService) {}

  ngOnInit(): void {
    const data: Breadcrumbs = {
      name: PathName.my_account_my_orders,
      path: Pathlink.my_orders,
      active: 'fw-bolder',
    };

    this._breadcrumbsService.showActivePageMyAccount(data);
  }
}
