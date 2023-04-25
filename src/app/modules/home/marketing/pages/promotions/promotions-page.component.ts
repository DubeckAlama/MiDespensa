import { Component, OnInit } from '@angular/core';
import { PathName, Pathlink } from '@app/core/enums';
import { BreadCrumbsService } from '@app/core/services';

@Component({
  selector: 'md-promotions-page',
  templateUrl: './promotions-page.component.html',
  styleUrls: ['./promotions-page.component.css'],
})
export class PromotionsPageComponent implements OnInit {
  constructor(private serviceBC: BreadCrumbsService) {
    const data = {
      name: PathName.promotions,
      path: Pathlink.promotions,
    };
    this.serviceBC.showActivePage(data);
  }

  ngOnInit(): void {}
}
