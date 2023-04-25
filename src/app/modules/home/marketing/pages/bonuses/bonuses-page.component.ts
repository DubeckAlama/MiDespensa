import { Component, OnInit } from '@angular/core';
import { PathName, Pathlink } from '@app/core/enums';
import { BreadCrumbsService } from '@app/core/services';

@Component({
  selector: 'md-bonuses-page',
  templateUrl: './bonuses-page.component.html',
  styleUrls: ['./bonuses-page.component.css'],
})
export class BonusesPageComponent implements OnInit {
  constructor(private serviceBC: BreadCrumbsService) {
    const data = {
      name: PathName.bonuses,
      path: Pathlink.bonuses,
    };
    this.serviceBC.showActivePage(data);
  }

  ngOnInit(): void {}
}
