import { User } from '@app/core/interfaces';

export interface CreateUser extends Omit<User, 'id' | 'email'> {
  password: string;
}
