import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  private activeForm: string = '';

  constructor() {}

  get nameForm(): string {
    return this.activeForm;
  }

  changeForm(name: string): void {
    this.activeForm = name;
  }
}
