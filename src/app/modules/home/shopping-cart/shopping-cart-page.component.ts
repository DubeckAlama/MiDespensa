import { Component, OnInit } from '@angular/core';
import { PathName, Pathlink } from '@app/core/enums';
import { BreadCrumbsService, StylesSettingsService } from '@app/core/services';

@Component({
  selector: 'md-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css'],
})
export class ShoppingCartPageComponent implements OnInit {
  constructor(
    private _bdService: BreadCrumbsService,
    private _StyleService: StylesSettingsService
  ) {
    const data = {
      name: PathName.shopping_cart,
      path: Pathlink.shopping_cart,
    };

    this._bdService.showActivePage(data);
    this._StyleService.selectTypeBreadCrumbs('medium');
  }

  ngOnInit(): void {}
}
