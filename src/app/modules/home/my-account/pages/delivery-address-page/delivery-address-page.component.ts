import { Component, OnInit } from '@angular/core';
import { BreadCrumbsService } from '@app/core/services';
import { Breadcrumbs } from '@app/core/interfaces';
import { Pathlink, PathName } from '@app/core/enums';

@Component({
  selector: 'md-delivery-address-page',
  templateUrl: './delivery-address-page.component.html',
  styleUrls: ['./delivery-address-page.component.css'],
})
export class DeliveryAddressPageComponent implements OnInit {
  constructor(private _breadcrumbsServices: BreadCrumbsService) {}

  ngOnInit(): void {
    const data: Breadcrumbs = {
      name: PathName.my_account_delivery_address,
      path: Pathlink.delivery_address,
      active: 'fw-bolder',
    };

    this._breadcrumbsServices.showActivePageMyAccount(data);
  }
}
