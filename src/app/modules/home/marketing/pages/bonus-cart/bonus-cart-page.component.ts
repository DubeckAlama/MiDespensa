import { Component, OnInit } from '@angular/core';
import { PathName, Pathlink } from '@app/core/enums';
import { BreadCrumbsService, StylesSettingsService } from '@app/core/services';

@Component({
  selector: 'md-bonus-cart-page',
  templateUrl: './bonus-cart-page.component.html',
  styleUrls: ['./bonus-cart-page.component.css'],
})
export class BonusCartPageComponent implements OnInit {
  constructor(
    private _serviceBC: BreadCrumbsService,
    private _StyleService: StylesSettingsService
  ) {
    const data = {
      name: PathName.bonus_cart,
      path: Pathlink.bonus_cart,
    };
    this._serviceBC.showActivePage(data);
    this._StyleService.selectTypeBreadCrumbs('medium');
  }

  ngOnInit(): void {}
}
