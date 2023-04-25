import { User, Address } from '@app/core/interfaces';
import { CreateUser } from '@app/core/models';
// forms
import { FormControl, FormGroup } from '@angular/forms';

export interface NewClient extends Pick<CreateUser, 'phone' | 'password'> {}
export interface ValidYourData
  extends Omit<User, 'id' | 'email' | 'phone' | 'password'| 'verified'> {
  answer: string;
}
export interface DeliveryAddress extends Omit<Address, 'id' | 'userId'> {}

// forms  one
export interface FormRegister
  extends FormGroup<{
    phone: FormControl<string>;
    password: FormControl<string>;
    confirm: FormControl<string>;
  }> {}

// forms two
export interface FormYourData
  extends FormGroup<{
    names: FormControl<string>;
    last_names: FormControl<string>;
    document_type_id: FormControl<number>;
    document: FormControl<string>;
    // email: FormControl<string>;
    sex: FormControl<string>;
    birth_date: FormControl<string>;
    answer: FormControl<string>;
  }> {}

// forms three
export interface FormDeliveryAddress
  extends FormGroup<{
    departament: FormControl<string>;
    province: FormControl<string>;
    district: FormControl<string>;
    address: FormControl<string>;
  }> {}
