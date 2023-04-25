import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { SupplierBrands } from '@app/core/interfaces';
import { dataSupplierBrands } from '@app/data';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'md-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css'],
})
export class ModalHomeComponent implements OnInit, AfterViewInit {
  @ViewChild('autoShownModal', { static: false })
  autoShownModal?: ModalDirective;
  startPucharse: boolean = true;
  isCollapsed = false;
  isModalShown: boolean = true;
  brands: SupplierBrands[] = dataSupplierBrands;
  selectedBrand!: number;
  currentModal: HTMLCollectionOf<Element> =
    document.getElementsByClassName('modal-backdrop');

  constructor(private _render: Renderer2) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.currentModal[0].setAttribute('style', 'background-color:#000;');
    }, 500);
  }

  ngOnInit(): void {}

  dissmisModal() {
    this.isModalShown = false;
    this.brands[this.selectedBrand].selected = false;
  }

  getBrand(index: number) {
    this.startPucharse = false;
    this.isCollapsed = true;

    this._changeStateBrand(index);
  }

  // chage state del attribute selected of the brands
  _changeStateBrand(index: number) {
    const currentBrand = this.brands[index].name;
    this.brands.forEach((objectMark) => {
      const ifSelectedBrandExists = objectMark.name === currentBrand;

      if (ifSelectedBrandExists) {
        objectMark.selected = true;
        return;
      }

      objectMark.selected = false;
    });

    this.selectedBrand = index;
  }
}
