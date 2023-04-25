import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../../claims.service';

@Component({
  selector: 'md-claims-history',
  templateUrl: './claims-history.component.html',
  styleUrls: ['./claims-history.component.css'],
})
export class ClaimsHistoryComponent implements OnInit {
  constructor(private _ClaimsService: ClaimsService) {}

  ngOnInit(): void {}

  changeFormTo(name: string): void {
    this._ClaimsService.changeForm(name);
  }
}
