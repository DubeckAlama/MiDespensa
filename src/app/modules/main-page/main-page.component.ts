import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/auth';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'md-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit, AfterViewInit {
  auth$: Observable<boolean>;
  private _secction!: string;

  constructor(
    private _authService: AuthService,
    private _viewportScroll: ViewportScroller,
    private _router: Router
  ) {
    this.auth$ = this._authService.isAuth;
    const currentParth = this._router.getCurrentNavigation();
    const fragment = currentParth?.finalUrl?.fragment || '';

    this._secction = fragment;
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    if (!!this._secction) {
      interface Refs {
        [index: string]: number;
        beneficios: number;
        cobertura: number;
        funcionamiento: number;
        'tienes-dudas': number;
      }

      const refs: Refs = {
        beneficios: 380,
        cobertura: 1900,
        funcionamiento: 2560,
        'tienes-dudas': 3100,
      };

      const position: number = refs[this._secction];

      this._viewportScroll.scrollToAnchor(this._secction);
      this._viewportScroll.scrollToPosition([0, position]);
    }
  }
}
