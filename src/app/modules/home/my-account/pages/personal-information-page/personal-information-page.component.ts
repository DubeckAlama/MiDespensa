import { Component, OnInit } from '@angular/core';
import { BreadCrumbsService } from '@app/core/services';
import { Breadcrumbs } from '@app/core/interfaces';
import { PathName, Pathlink } from '@app/core/enums';

@Component({
  selector: 'md-personal-information-page',
  templateUrl: './personal-information-page.component.html',
  styleUrls: ['./personal-information-page.component.css'],
})
export class PersonalInformationPageComponent implements OnInit {
  constructor(private _breadcrumbsService: BreadCrumbsService) {}

  ngOnInit(): void {
    const data: Breadcrumbs = {
      name: PathName.my_account_personal_information,
      path: Pathlink.personal_information,
      active: 'fw-bolder',
    };

    this._breadcrumbsService.showActivePageMyAccount(data);
  }
}
