import { Sex } from '@app/core/interfaces';

export const Sexes: Omit<Sex, 'id'>[] = [
  {
    name: 'Mujer',
  },
  {
    name: 'Varón',
  },
  {
    name: 'Otros',
  },
];
