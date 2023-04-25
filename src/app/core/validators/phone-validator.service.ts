import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';

import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { ResUser } from '@app/core/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PhoneValidatorService implements AsyncValidator {
  private _url = environment.API_URL;
  constructor(private _http: HttpClient) {}

  validate(
    control: AbstractControl<string, any>
  ): Observable<ValidationErrors | null> {
    const phone: string = control.value;
    const params = new HttpParams().set('phone', phone);
    return this._http.get<ResUser[]>(`${this._url}/users`, { params }).pipe(
      // delay(1000),
      map((res) => (res.length === 0 ? null : { exists: true }))
    );
  }
}
