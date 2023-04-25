import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../../claims.service';

@Component({
  selector: 'md-new-claim-form',
  templateUrl: './new-claim-form.component.html',
  styleUrls: ['./new-claim-form.component.css'],
})
export class NewClaimFormComponent implements OnInit {
  constructor(private _ClaimsService: ClaimsService) {}

  ngOnInit(): void {}

  register(): void {
    this._ClaimsService.changeForm('registered');
  }
}
