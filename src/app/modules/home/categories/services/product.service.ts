import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '@app/core/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /*
   *.properties
   */
  private _url = environment.API_URL;

  // create a behaviorSubject to store the data
  private _dataProductsSubject: BehaviorSubject<Array<Product>> =
    new BehaviorSubject({} as Array<Product>);
  // create an observable to expose the behaviorSubject as an observable
  readonly dataProducts: Observable<Array<Product>> =
    this._dataProductsSubject.asObservable();

  /*
   *.constructor
   */
  constructor(private _http: HttpClient) {
    this._getProducts().subscribe({
      next: (data) => this._dataProductsSubject.next(data),
    });
  }

  /*
   *.methods -> api
   */
  private _getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._url}/products`);
  }
}
