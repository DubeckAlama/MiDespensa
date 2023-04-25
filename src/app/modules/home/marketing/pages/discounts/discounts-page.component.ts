import { Component, OnInit } from '@angular/core';
import { PathName, Pathlink } from '@app/core/enums';
import { BreadCrumbsService, StylesSettingsService } from '@app/core/services';

@Component({
  selector: 'md-discounts-page',
  templateUrl: './discounts-page.component.html',
  styleUrls: ['./discounts-page.component.css'],
})
export class DiscountsPageComponent implements OnInit {
  constructor(private serviceBC: BreadCrumbsService) {
    const data = {
      name: PathName.discounts,
      path: Pathlink.discounts,
    };
    this.serviceBC.showActivePage(data);
  }

  ngOnInit(): void {}
}
