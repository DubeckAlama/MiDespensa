import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth';

const style = `.mouse-click {cursor: pointer;}`;
@Component({
  selector: 'md-home-header',
  styles: [style],
  templateUrl: './home-header.component.html',
})
export class HomeHeaderComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  signOut() {
    this._AuthService.signOut();
    this._router.navigateByUrl('');
  }
}
