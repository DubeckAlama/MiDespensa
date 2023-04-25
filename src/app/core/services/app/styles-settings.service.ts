import { Injectable } from '@angular/core';
import { TypeProductCard, TypeBreadcrumbs } from '@app/core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StylesSettingsService {
  /*
   *.properties*/
  // breadcrumbs
  private _type_breadcrumbs!: string;
  //product
  private _typeProductCard!: string;

  /*
   *.constructor*/
  constructor() {}

  /*
   *.accessors getter
   */
  // breadcrumbs
  get typeBreadCrumbs() {
    return this._type_breadcrumbs;
  }

  // product
  get typeCard() {
    return this._typeProductCard;
  }

  /*
   *.methods
   */
  // breadcrumbs
  selectTypeBreadCrumbs(type: string = 'small'): void {
    const TYPES_BREADCRUMBS: TypeBreadcrumbs = {
      'small': 'breadcrumbs-1',
      'medium': 'breadcrumbs-2',
    };

    this._type_breadcrumbs = TYPES_BREADCRUMBS[type];
  }

  //  product
  selectTypeProductCard(type: string = '1'): void {
    const TYPES_CARDS: TypeProductCard = {
      '1': 'box-producto',
      '2': 'box-producto medium',
    };

    this._typeProductCard = TYPES_CARDS[type];
  }
}
