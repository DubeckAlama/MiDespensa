import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../../pages/claims-page/claims.service';

@Component({
  selector: 'md-navbar-myaccount',
  templateUrl: './navbar-myaccount.component.html',
  styleUrls: ['./navbar-myaccount.component.css'],
})
export class NavbarMyaccountComponent implements OnInit {
  constructor(private _ClaimsService: ClaimsService) {}

  ngOnInit(): void {}

  changeForm(name:string) {
    this._ClaimsService.changeForm(name)
  }
}
