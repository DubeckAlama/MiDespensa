import { Address } from '@app/core/interfaces';

export interface CreateAddress extends Omit<Address, 'id'> {}
