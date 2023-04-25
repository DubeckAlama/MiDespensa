import { Component, OnInit } from '@angular/core';
import { StylesSettingsService } from '@app/core/services';

@Component({
  selector: 'md-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit {
  constructor(private _stylesService: StylesSettingsService) {
    this._stylesService.selectTypeBreadCrumbs()
    this._stylesService.selectTypeProductCard()
  }

  ngOnInit(): void {}
}
