import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ResCategories } from '@app/core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HomeNavbarService {
  private _url = environment.API_URL;

  constructor(private _http: HttpClient) {}

  getCategories(): Observable<ResCategories[]> {
    return this._http.get<ResCategories[]>(this._url + '/categories');
  }

}
