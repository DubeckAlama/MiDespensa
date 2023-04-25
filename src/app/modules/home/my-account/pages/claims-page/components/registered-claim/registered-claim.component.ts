import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../../claims.service';

@Component({
  selector: 'md-registered-claim',
  templateUrl: './registered-claim.component.html',
  styleUrls: ['./registered-claim.component.css'],
})
export class RegisteredClaimComponent implements OnInit {
  constructor(private _ClaimsService: ClaimsService) {}

  ngOnInit(): void {}

  return(): void {
    this._ClaimsService.changeForm('');
  }
}
