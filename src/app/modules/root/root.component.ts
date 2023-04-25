import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/auth';

@Component({
  selector: 'md-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  auth$: Observable<boolean>;
  constructor(private _authService: AuthService) {
    this._authService.verifyAuth().subscribe();
    this.auth$ = this._authService.isAuth;
  }

  ngOnInit(): void {}
}
