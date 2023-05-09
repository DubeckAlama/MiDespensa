import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Credentials } from '@app/core/interfaces';
import { ValidationsService } from '@app/core/validators';
import { AuthService } from '@app/core/auth';

@Component({
  selector: 'md-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})

export class LoginPageComponent implements OnInit {
  userNotFound!: boolean;
  unVerifiedUser!: boolean;
  VerifiedUser!: boolean;
  userName!: string;

  formLogin: FormGroup ;

  /* corregido : 09-05-2023
  formLogin: FormGroup = this._fb?.group({
    phone: ['', [Validators.required, Validators.pattern(this._vs.regexPhone)]],
    password: ['', [Validators.required]],
  });
*/

  constructor(
    private _fb: FormBuilder,
    private _vs: ValidationsService,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.formLogin = this._fb.group({
      phone: ['', [Validators.required, Validators.pattern(this._vs.regexPhone)]],
      password: ['', [Validators.required]],
    })
  }


  ngOnInit(): void {
    this._vs.setFormGroup = this.formLogin;
  }

  toAccess() {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
    }

    const credentials: Credentials = this.formLogin.value;

    this._authService.logIn(credentials).subscribe({
      next: (response) => {
        this.userNotFound = !response.length;
        if (!this.userNotFound) {
          const user = response[0];
          this.unVerifiedUser = !user.verified;
          this.VerifiedUser = user.verified;
          this.userName = user.names;
        }
      },
      complete: () => this.toHome(),
    });
  }

  toHome(): void {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
    }
    // if it is verified
    if (this.VerifiedUser) this._router.navigateByUrl('/');
  }

  /*
   *  methods to validate in forms
   **/
  ifFieldIsNotValid(field: string): Validators | null {
    return this._vs.validField(field, this.formLogin);
  }

  isValidBy(field: string, error: string): Validators | null {
    const attributes = { field, error };
    return this._vs.isValidBy(attributes);
  }
}
