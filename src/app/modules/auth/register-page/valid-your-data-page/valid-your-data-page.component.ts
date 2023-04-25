import { Component, OnInit } from '@angular/core';
import { Knows, Sexes } from '@app/data';
import { RegisterService } from '../register.service';
// interfaces
import { Know, Sex, FormYourData, TypeDocument } from '@app/core/interfaces';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  ValidationsService,
  DocumentValidatorService,
} from '@app/core/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'md-valid-your-data-page',
  templateUrl: './valid-your-data-page.component.html',
  styleUrls: ['./valid-your-data-page.component.css'],
})
export class ValidYourDataPageComponent implements OnInit {
  /*
   * properties
   */
  sexes: Omit<Sex, 'id'>[] = Sexes;
  knows: Omit<Know, 'userId' | 'id'>[] = Knows;
  documents$!: Observable<TypeDocument[]>;
  formYourData!: FormYourData;

  constructor(
    private _fb: FormBuilder,
    private _RegisterService: RegisterService,
    private _documentValidator: DocumentValidatorService,
    private _vs: ValidationsService,

    private _router: Router
  ) {
    /*
     *.Validate if there is information
     */
    const notFoundData = this._RegisterService.returnRegisterNewAccount;
    if (!notFoundData.hasOwnProperty('phone')) {
      this._router.navigate(['/auth/register']);
    }
    /*
     * form to validate
     */
    this.formYourData = this._fb.nonNullable.group({
      names: ['', [Validators.required]],
      last_names: ['', [Validators.required]],
      document_type_id: [0, [Validators.min(1), Validators.max(3)]],
      document: [
        '',
        [Validators.required, Validators.pattern(this._vs.regexDNI)],
        [this._documentValidator.validate.bind(this._documentValidator)],
        'blur',
      ],
      // email: [''],
      sex: ['', [Validators.required]],
      birth_date: [
        '',
        [Validators.required, Validators.pattern(this._vs.regexBirthDate)],
      ],
      answer: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this._vs.setFormGroup = this.formYourData;
    this.documents$ = this._RegisterService.getTypesDocuments();
  }

  /*
   * methods
   */
  continue() {
    if (this.formYourData.invalid) {
      this.formYourData.markAllAsTouched();
    }

    this._RegisterService.dataValidYourData = this.formYourData.getRawValue();
    this._router.navigate(['/auth/direccion-de-entrega']);
    this.formYourData.reset();
  }

  /*
   *  methods to validate in forms
   **/
  ifFieldIsNotValid(field: string): Validators | null {
    return this._vs.validField(field, this.formYourData);
  }

  isValidBy(field: string, error: string): Validators | null {
    const attributes = { field, error };
    return this._vs.isValidBy(attributes);
  }
}
