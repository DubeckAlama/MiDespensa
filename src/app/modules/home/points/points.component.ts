import { Component, OnInit } from '@angular/core';

import { BreadCrumbsService, StylesSettingsService } from '@app/core/services';
import { PathName, Pathlink } from '@app/core/enums';

@Component({
  selector: 'md-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
})
export class PointsComponent implements OnInit {
  constructor(
    private _bcService: BreadCrumbsService,
    private _StyleService: StylesSettingsService,
    private _styleService: StylesSettingsService
  ) {
    const data = {
      name: PathName.points_promotions,
      path: Pathlink.points_promotions,
    };
    this._bcService.showActivePage(data);
    this._StyleService.selectTypeBreadCrumbs('medium');
    this._styleService.selectTypeProductCard('2');
  }

  ngOnInit(): void {}
}
