import { Injectable } from '@angular/core';
import { validateError } from '@app/core/interfaces';
import { Validators, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationsService {
  public readonly nameAndSurnameFormat: string = '([a-zñA-ZÑ]+) ([a-zñA-ZÑ]+)';
  public readonly emailFormat: string =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public readonly strongKey: string =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,})';
  private _regexPhone: string = '^\\d{3}\\d{3}\\d{3}$';
  private _regexPhoneCode: string = '^\\d{3} \\d{3}$';
  private _regexDNI: string = '^\\d{8}$';
  private _regexBirthDate: RegExp =
    /^(?:(?:(0?[1-9]|1\d|2[0-8])[/](0?[1-9]|1[0-2])|(29|30)[/](0?[13-9]|1[0-2])|(31)[/](0?[13578]|1[02]))[/](0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|(29)[/](0?2)[/](\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;

  private _form!: FormGroup;
  constructor() {}

  /*
  Accessors
  */

  get regexPhone(): string {
    return this._regexPhone;
  }
  get regexPhoneCode(): string {
    return this._regexPhoneCode;
  }

  get regexDNI(): string {
    return this._regexDNI;
  }

  get regexBirthDate(): RegExp {
    return this._regexBirthDate;
  }

  set setFormGroup(currentForm: FormGroup) {
    this._form = currentForm;
  }
  /*
   * methods of validations
   **/

  validField(namefield: string, form?: FormGroup): Validators | null {
    const inputName = this._form.controls[namefield];
    return inputName.invalid && (inputName.dirty || inputName.touched);
  }

  validateError(parms: validateError): Validators | null {
    const inputName = this._form.controls[parms.field];
    return inputName.errors?.[parms.error];
  }

  matchPassword(primaryKey: string, keyToCompare: string): Validators | null {
    const responseConfirmation = (
      formGroup: AbstractControl
    ): Validators | null => {
      const password: string = formGroup.get(primaryKey)?.value;
      const confirm: string = formGroup.get(keyToCompare)?.value;

      const ifTheyAreDifferent = password !== confirm;

      if (!confirm) {
        formGroup.get(keyToCompare)?.setErrors({ required: true });
        return { required: true };
      }

      if (ifTheyAreDifferent) {
        formGroup.get(keyToCompare)?.setErrors({ nomatch: true });
        return { nomatch: true };
      }

      formGroup.get(keyToCompare)?.setErrors(null);

      return null;
    };

    // return validation
    return responseConfirmation;
  }

  /*
   * methods to validate in forms
   **/
  isValidBy(attributes: { field: string; error: string }): Validators | null {
    const isvalid = this.validateError(attributes);
    return isvalid;
  }
}
