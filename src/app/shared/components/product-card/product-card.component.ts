import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@app/core/interfaces';
import { StylesSettingsService } from '@app/core/services';

@Component({
  selector: 'md-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  get typeCardProduct(): string {
    return this._stylesService.typeCard || 'box-producto';
  }

  gifStyle: string = '';
  markStyle: string = '';
  heartStyle: string = '';
  typeHeart: string = '';

  @Input('title-button') titleButton: string = '';
  @Input('id-modal') idModal: string = '';
  @Input('type-card') typeProduct: string = '';

  @Input() product: Product = {
    id: 1,
    name: 'gomitas ambrosito',
    trademark: 'Ambrosoli',
    measure: '100 g',
    price: 4.8,
    image: 'assets/images/product-loader.svg',
    category: 'confiteria',
    subcategory: '',
    tags: [],
  };

  constructor(private _stylesService: StylesSettingsService) {}

  ngOnInit(): void {
    const condition = 'box-producto medium';

    const gifStyle = this.typeCardProduct === condition ? 'gif-medium' : '';
    const markStyle = this.typeCardProduct === condition ? 'ml-14-2' : '';
    const heartStyle = this.typeCardProduct === condition ? 'heart-medium' : '';
    const typeHeart =
      this.typeCardProduct === condition ? 'fa-regular' : 'fa-solid';

    this.gifStyle = gifStyle;
    this.markStyle = markStyle;
    this.heartStyle = heartStyle;
    this.typeHeart = typeHeart;
  }
}
