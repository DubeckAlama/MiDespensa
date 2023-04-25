import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Unsubscribable } from 'rxjs';

import { AuthService } from '@app/core/auth';
import { RegisterService } from '../register.service';

import { DeliveryAddress } from '@app/core/interfaces';
import { FormDeliveryAddress } from '@app/core/interfaces';
import { ValidationsService } from '@app/core/validators';

@Component({
  selector: 'md-delivery-address-page',
  templateUrl: './delivery-address-page.component.html',
  styleUrls: ['./delivery-address-page.component.css'],
})
export class DeliveryAddressPageComponent implements OnInit, OnDestroy {
  /*
   * properties
   */
  formDeliveryAddres!: FormDeliveryAddress;
  isActive: string = '#registrar';
  registerUnSubscribe!: Unsubscribable;

  /*
   *.Accessors
   */
  get registered(): boolean {
    return this._RegisterService.registered;
  }
  get addressDefault() {
    return this._getAddress();
  }
  /*
   *.constructor
   */
  constructor(
    private _fb: FormBuilder,
    private _RegisterService: RegisterService,
    private _vs: ValidationsService,
    private _router: Router
  ) {
    /*
     *.Validate if there is information
     */
    const notFoundData = this._RegisterService.returnValidYourData;
    if (!notFoundData.hasOwnProperty('names')) {
      this._router.navigate(['/auth/register']);
    }
    /*
     *.form to validate
     */
    this.formDeliveryAddres = this._fb.nonNullable.group({
      departament: ['', Validators.required],
      province: ['', Validators.required],
      district: ['', Validators.required],
      address: [
        '',
        [Validators.required, Validators.minLength(10)],
      ],
    });
  }

  ngOnDestroy(): void {
    if (this.registerUnSubscribe) {
      this.registerUnSubscribe.unsubscribe();
    }
  }

  ngOnInit(): void {
    this._vs.setFormGroup = this.formDeliveryAddres;
  }

  /*
   *.methods
   */

  private _getAddress(): string {
    const departament = this.formDeliveryAddres.get('departament')?.value || '';
    const province = this.formDeliveryAddres.get('province')?.value || '';
    const address = this.formDeliveryAddres.get('address')?.value || '';

    const fullAddress = `${address} - ${province}, ${departament}`;
    return fullAddress;
  }

  /*
   *  methods to validate in forms
   **/
  ifFieldIsNotValid(field: string): Validators | null {
    return this._vs.validField(field);
  }

  isValidBy(field: string, error: string): Validators | null {
    const attributes = { field, error };
    return this._vs.isValidBy(attributes);
  }

  /*
   *  methods to communicate with services
   **/

  register() {
    if (this.formDeliveryAddres.invalid) {
      this.formDeliveryAddres.markAllAsTouched();
      return;
    }

    if (this.formDeliveryAddres.valid) {
      this._registerUser();
    }
  }

  // TODO: redirect home
  toHome() {
    this._router.navigateByUrl('/');
  }

  private _registerUser() {
    //TODO: send data to service
    const dataForm: DeliveryAddress = this.formDeliveryAddres.getRawValue();
    this._RegisterService.dataDeliveryAddress = dataForm;

    // TODO: register user
    this.registerUnSubscribe = this._RegisterService.createUser().subscribe();
  }
}
