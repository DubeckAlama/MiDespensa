import { Know } from '@app/core/interfaces';

export interface CreateKnow extends Omit<Know, 'id'> {}
