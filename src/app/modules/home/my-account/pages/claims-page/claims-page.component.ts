import { Component, OnInit } from '@angular/core';
import { ClaimsService } from './claims.service';
import { BreadCrumbsService } from '@app/core/services';
import { Breadcrumbs } from '@app/core/interfaces';
import { PathName, Pathlink } from '@app/core/enums';

@Component({
  selector: 'md-claims-page',
  templateUrl: './claims-page.component.html',
  styleUrls: ['./claims-page.component.css'],
})
export class ClaimsPageComponent implements OnInit {
  get activeForm(): string {
    return this._ClaimsService.nameForm;
  }

  constructor(
    private _ClaimsService: ClaimsService,
    private _breadcrumbsService: BreadCrumbsService
  ) {}

  ngOnInit(): void {
    const data: Breadcrumbs = {
      name: PathName.my_account_claims,
      path: Pathlink.claims,
      active: 'fw-bolder',
    };

    this._breadcrumbsService.showActivePageMyAccount(data);
  }
}
