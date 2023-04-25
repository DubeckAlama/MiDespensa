import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth';
import { Address, HomeNavbar, ResCategories, User } from '@app/core/interfaces';
import { HomeNavbarService } from '@app/core/services';

@Component({
  selector: 'md-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css'],
})
export class HomeNavbarComponent implements OnInit {
  categories: HomeNavbar[] = [];
  profile: Omit<User, 'email'> = {} as User;
  address$: Observable<Address> = this._authService.address;
  count:number = 0;

  constructor(
    private _navbarHomeService: HomeNavbarService,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.profile = this._authService.user;
  }

  ngOnInit(): void {
    this._navbarHomeService.getCategories().subscribe({
      next: (data) => (this.categories = this.formatNavbar(data)),
    });
  }

  // *methods public of class
  formatNavbar(data: ResCategories[]): HomeNavbar[] {
    const homeNavbar: HomeNavbar[] = [];
    data.map((res) => {
      const { subcategories, ...navbar } = res;
      homeNavbar.push(navbar);
    });

    return homeNavbar;
  }

  goToResults() {
    this._router.navigate(['/resultados']);
  }
}
