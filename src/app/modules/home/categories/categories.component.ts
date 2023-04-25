import { Component, OnInit } from '@angular/core';
import { StylesSettingsService } from '@app/core/services';

@Component({
  selector: 'md-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private _styleService: StylesSettingsService) {
    this._styleService.selectTypeBreadCrumbs('medium');
    this._styleService.selectTypeProductCard('2');
  }

  ngOnInit(): void {}
}
