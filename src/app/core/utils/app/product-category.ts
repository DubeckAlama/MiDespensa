import { PathName, Pathlink } from '@app/core/enums';
import { Breadcrumbs } from '@app/core/interfaces';

const getCategoriePathName = (url: string): PathName => {
  const key = getKeyCategorie(url);
  const indexOfName = Object.keys(PathName).indexOf(key);
  const pathName = Object.values(PathName)[indexOfName];

  return pathName;
};

const getCategoriePathLink = (url: string): Pathlink => {
  const key = getKeyCategorie(url);
  const indexOfLink = Object.keys(Pathlink).indexOf(key);
  const pathLink = Object.values(Pathlink)[indexOfLink];

  return pathLink;
};

const getKeyCategorie = (url: string): string => {
  const activeCategory = url.split('/').at(-1) || '';
  const key = activeCategory.replace(/-/g, '_');
  return key;
};

export const getBreadcrumbsData = (activeCategory: string): Breadcrumbs => {
  const name = getCategoriePathName(activeCategory);
  const path = getCategoriePathLink(activeCategory);
  const active = 'fw-bolder';

  const data: Breadcrumbs = { name, path, active };
  // return data as Breadcrumbs;
  return data;
};
