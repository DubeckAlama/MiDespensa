import { Know } from '@app/core/interfaces';

export const Knows: Omit<Know, 'userId' | 'id'>[] = [
  {
    answer: 'Periódico',
  },
  {
    answer: 'Internet',
  },
  {
    answer: 'Radio y/o TV',
  },
];
