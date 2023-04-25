import { Injectable } from '@angular/core';
import { Observable, of, Unsubscribable } from 'rxjs';
// import { } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// interfaces
import {
  NewClient,
  ValidYourData,
  DeliveryAddress,
  TypeDocument,
  ResUser,
  Know,
} from '@app/core/interfaces';

// models
import { CreateUser, CreateKnow, CreateAddress } from '@app/core/models';
import { AuthService } from '@app/core/auth';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  /*
   *.Form information:
   */
  /*
   * 01: Register a new account
   */
  private _formRegisterNewAcc!: NewClient;
  /*
   * 02: Valid your data
   */
  private _formValidYourData!: ValidYourData;
  /*
   * 03: Delivery address
   */
  private _formDeliveryAddress!: DeliveryAddress;

  /*
   * properties
   */
  private _url = environment.API_URL;
  private _registered!: boolean;

  /*
   * constructor
   **/
  constructor(private _http: HttpClient, private _authService: AuthService) {}

  /*
   *****************************
   * Accessors  setter and getter for New Client
   *****************************
   */
  // *.setters
  set dataRegisterNewAccount(data: NewClient) {
    this._formRegisterNewAcc = data;
  }

  set dataValidYourData(data: ValidYourData) {
    this._formValidYourData = data;
  }

  set dataDeliveryAddress(data: DeliveryAddress) {
    this._formDeliveryAddress = data;
  }

  set statusRegister(status: boolean) {
    this._registered = status;
  }

  // *.getters

  // * return data
  get returnRegisterNewAccount() {
    return { ...this._formRegisterNewAcc };
  }

  get returnValidYourData() {
    return { ...this._formValidYourData };
  }

  get registered(): boolean {
    return this._registered;
  }
  /*
   *****************************
   * Methods that connect to the API
   *****************************
   */
  // all types of documents
  getTypesDocuments(): Observable<TypeDocument[]> {
    return this._http.get<TypeDocument[]>(`${this._url}/document_types`);
  }

  createUser(): Observable<boolean> {
    /* TODO: register user and get "id"
     */
    const { answer, ...user } = this._formValidYourData;
    const verified = false;
    const dataUser: CreateUser = {
      ...this._formRegisterNewAcc,
      ...user,
      verified,
    };

    this._http.post<ResUser>(`${this._url}/users`, { ...dataUser }).subscribe({
      next: (response: ResUser) => {
        /*
         *.record restaurant information
         */
        this.statusRegister = true;
        const user_id = response.id;
        /* TODO: register know with id user*/
        this._createKnow(user_id);
        /* TODO: register address with id user*/
        this._createAddress(user_id);
      },
      error: () => {
        this.badRequest();
        this.statusRegister = false;
      },
    });

    // response confirmation
    if (!this.registered) {
      return of(false);
    }

    return of(true);
  }

  private _createKnow(userId: number) {
    const { answer } = this._formValidYourData;
    const dataknow: CreateKnow = {
      userId,
      answer,
    };

    this._http.post<Know>(`${this._url}/knows`, { ...dataknow }).subscribe();
  }

  private _createAddress(userId: number) {
    const dataAddres: CreateAddress = {
      userId,
      ...this._formDeliveryAddress,
    };

    this._http.post(`${this._url}/addresses`, { ...dataAddres }).subscribe();
    // console.log('addres aqui');
  }

  badRequest() {
    throw new Error('user no register');
  }
}
