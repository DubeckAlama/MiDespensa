import { PathName } from '../../enums/app/path-name';
import { Pathlink } from '../../enums/app/path-link';

export interface Breadcrumbs {
  name: PathName;
  path: Pathlink;
  active: 'fw-bolder' | '';
}
export interface TypeBreadcrumbs {
  [index: string]: string;
  'small': string;
  'medium': string;
}
