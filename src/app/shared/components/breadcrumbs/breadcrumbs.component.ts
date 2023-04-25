import { BreadCrumbsService, StylesSettingsService } from '@app/core/services';
import { Component, OnInit } from '@angular/core';
import { Breadcrumbs } from '@app/core/interfaces';

@Component({
  selector: 'md-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  get breadcrumbsLinks(): Breadcrumbs[] {
    return this._BreadcrumbsService.routeData;
  }

  get type(): string {
    return this._stylesService.typeBreadCrumbs || 'breadcrumbs-1';
  }

  constructor(
    private _BreadcrumbsService: BreadCrumbsService,
    private _stylesService: StylesSettingsService
  ) {}

  ngOnInit(): void {}
}
