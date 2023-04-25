import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

// Service of validators
import {
  ValidationsService,
  PhoneValidatorService,
} from '@app/core/validators';

// service of register
import { RegisterService } from './register.service';
// interfaces
import { FormRegister, NewClient } from '@app/core/interfaces';

@Component({
  selector: 'md-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  formRegister!: FormRegister;
  formConfirmation!: FormGroup<{
    phone_code: FormControl<string>;
  }>;
  modal: string | null = null;

  constructor(
    private _fb: FormBuilder,
    private _registerService: RegisterService,

    private _vs: ValidationsService,
    private _phoneService: PhoneValidatorService,

    private _router: Router
  ) {
    this.formRegister = this._fb.group(
      {
        phone: [
          '',
          [Validators.required, Validators.pattern(this._vs.regexPhone)],
          [this._phoneService],
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirm: ['', [Validators.required]],
      },
      {
        validators: [this._vs.matchPassword('password', 'confirm')],
      }
    );

    this.formConfirmation = this._fb.nonNullable.group({
      phone_code: [
        '',
        [Validators.required, Validators.pattern(this._vs.regexPhoneCode)],
      ],
    });
  }

  ngOnInit(): void {
    this._vs.setFormGroup = this.formRegister;
  }

  // methods
  continue() {
    if (this.formRegister.invalid) {
      this.formConfirmation.markAllAsTouched();
    }

    const { phone, password }: NewClient = this.formRegister.getRawValue();
    this._registerService.dataRegisterNewAccount = { phone, password };

    setTimeout(() => {
      this.formConfirmation.patchValue({ phone_code: '456 789' });
    }, 1050);
  }

  confirmationCode(): void {
    if (this.formConfirmation.invalid) {
      this.formConfirmation.markAllAsTouched();
    }

    this._router.navigate(['/auth/valida-tus-datos']);

    this.formRegister.reset();
    this.formConfirmation.reset();
  }

  /*
   *  methods to validate in forms
   **/
  ifFieldIsNotValid(field: string): Validators | null {
    return this._vs.validField(field, this.formRegister);
  }

  isValidBy(field: string, error: string): Validators | null {
    const attributes = { field, error };
    return this._vs.isValidBy(attributes);
  }
}
