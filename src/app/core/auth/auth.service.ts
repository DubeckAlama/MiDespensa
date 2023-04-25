import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Credentials, User, ResUser, Address } from '@app/core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _url = environment.API_URL;
  private _authenticated: boolean = false;
  private _user: Omit<User, 'email'> | undefined;
  // create a behaviorSubject to store the data
  private _addressSubject: BehaviorSubject<Address> = new BehaviorSubject(
    {} as Address
  );
  // create an observable to expose the behaviorSubject as an observable
  readonly address: Observable<Address> = this._addressSubject.asObservable();
  private _status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private _http: HttpClient) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * getter for user
   */

  get user(): Omit<User, 'email'> {
    return { ...this._user! };
  }

  /**
   * authenticated status functionality
   * getter & setter
   */
  get isAuth() {
    return this._status.asObservable();
  }

  set status(status: boolean) {
    this._status.next(status);
  }

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  logIn(credentials: Credentials): Observable<ResUser[]> {
    // Throw error, if the user is already logged in
    if (this._authenticated) {
      return throwError(() => 'User is already logged in.');
    }

    const { phone, password } = credentials;
    const params = new HttpParams()
      .set('phone', phone)
      .set('password', password);

    return this._http.get<ResUser[]>(`${this._url}/users`, { params }).pipe(
      switchMap((response: ResUser[]) => {
        // if user not found
        if (!response.length) {
          this.status = false;
          return of(response);
        }

        // if the user is verified
        if (response[0].verified) {
          // Store the access token in the local storage
          this._searchAddress(response[0].id);
          this.accessToken = response[0].phone;
          // Set the authenticated flag to true
          this._authenticated = true;
          this.status = true;
          // Store the user on the user service
          this._user = response[0];
        }

        // Return a new observable with the response
        return of(response);
      })
    );
  }

  // -----------------------------------------------------------------------------------------------------
  // Methods the auth service
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign out
   */
  signOut(): Observable<boolean> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');

    // Set the authenticated flag to false
    this.status = false;
    this._authenticated = false;

    // Return the observable
    return of(true);
  }

  /**
   * Sign in using the access token
   */
  signInUsingToken(): Observable<boolean> {
    // Sign in using the token
    const params = new HttpParams().set('phone', this.accessToken);

    return this._http.get<boolean>(`${this._url}/users`, { params }).pipe(
      catchError(() => {
        this.signOut();
        return of(false);
      }),
      switchMap((response: any): Observable<boolean> => {
        // if user not found
        if (!response.length) {
          this.signOut();
          return of(false);
        }
        // Replace the access token with the new one if it's available on
        // the response object.
        //
        // This is an added optional step for better security. Once you sign
        // in using the token, you should generate a new one on the server
        // side and attach it to the response object. Then the following
        // piece of code can replace the token with the refreshed one.
        // if ( response.accessToken )
        // {
        //     this.accessToken = response.accessToken;
        // }
        // Set the authenticated flag to true
        this._searchAddress(response[0].id);
        this._authenticated = true;
        this.status = true;
        // Store the user on the user service
        // search address by id userId
        this._user = response[0];
        // Return true
        return of(true);
      })
    );
  }

  /**
   * Check the authentication status
   */
  verifyAuth(): Observable<boolean> {
    // Check if the user is logged in
    if (this._authenticated) {
      this.status = true;
      return of(true);
    }

    // Check the access token availability
    if (!this.accessToken) {
      this.status = false;
      return of(false);
    }

    // Check the access token expire date
    // If the access token exists and it didn't expire, sign in using it
    return this.signInUsingToken();
  }

  private _searchAddress(id: number) {
    const params = new HttpParams().set('userId', id);
    this._http.get<Address[]>(`${this._url}/addresses`, { params }).subscribe({
      next: (res) => this._addressSubject.next(res[0]),
    });
  }
}
