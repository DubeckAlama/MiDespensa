import { Component, OnInit} from '@angular/core';
import { BreadCrumbsService } from '@app/core/services';
import { Breadcrumbs } from '@app/core/interfaces';
import { PathName, Pathlink } from '@app/core/enums';

@Component({
  selector: 'md-billing-address-page',
  templateUrl: './billing-address-page.component.html',
  styleUrls: ['./billing-address-page.component.css'],
})
export class BillingAddressPageComponent implements OnInit {
  constructor(private _BreadcrumbsService: BreadCrumbsService) {}

  ngOnInit(): void {
    const data: Breadcrumbs = {
      name: PathName.my_account_billing_address,
      path: Pathlink.billing_address,
      active: 'fw-bolder',
    };

    this._BreadcrumbsService.showActivePageMyAccount(data);
  }
}
