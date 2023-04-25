import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Breadcrumbs, Product } from '@app/core/interfaces';
import { BreadCrumbsService, ListingBoxService } from '@app/core/services';
import { getBreadcrumbsData } from '@app/core/utils';
import { ProductService } from '../../services/product.service';
// my pipes
import { FilterByCategoryPipe } from '../../pipes/filter-by-category.pipe';
import { FilterByPipe } from '../../pipes/filter-by.pipe';

@Component({
  selector: 'md-product-category-page',
  templateUrl: './product-category-page.component.html',
  styleUrls: ['./product-category-page.component.css'],
})
export class ProductCategoryPageComponent implements OnInit, OnDestroy {
  private _category!: string;

  // get data from service dataProducts with subcription;
  productsSubcription: Subscription | undefined;
  products: Array<Product> = [];
  productsMain: Array<Product> = [];
  // get data names of categories from service ListingBoxService
  namesSubCatSubcription: Subscription | undefined;
  namesTagsSubcription: Subscription | undefined;
  // filters for products
  subCategory!: Array<string>;
  tags!: Array<string>;

  get category() {
    return this._category;
  }

  constructor(
    private _BreadcrumbsService: BreadCrumbsService,
    private _listingBoxService: ListingBoxService,
    private _productsService: ProductService,
    private _router: Router
  ) {}

  ngOnDestroy(): void {
    this.productsSubcription?.unsubscribe();
    this.namesSubCatSubcription?.unsubscribe();
  }

  ngOnInit(): void {
    const activePath = this._router.url;
    const activeCategory = this._getCategoryFromUrl(activePath);

    this._category = activeCategory;
    this._listingBoxService.setListinBoxBy(this.category);

    const data: Breadcrumbs = getBreadcrumbsData(activeCategory);
    this._BreadcrumbsService.showActivePageCategories(data);

    this.productsSubcription = this._productsService.dataProducts.subscribe({
      next: (data) => {
        if (data.length > 0) {
          this._filterProductsByCategory(data);
          return;
        }
      },
    });

    this.namesSubCatSubcription =
      this._listingBoxService.namesItems.subscribe({
        next: (data) => {
          this.subCategory = data;
          this.products = this._filterProducts(this.subCategory, this.tags);
        },
      });

    this.namesTagsSubcription = this._listingBoxService.namesTags.subscribe({
      next: (data) => {
        this.tags = data;
        this.products = this._filterProducts(this.subCategory, this.tags);
      },
    });
  }

  /*
   *.methods private
   */
  private _getCategoryFromUrl(url: string): string {
    return url.split('/').at(-1) || '';
  }

  // trackBy for ngFor in product-category-page
  trackByProductId(index: number, item: Product): number {
    return item.id;
  }

  private _filterProducts(
    subCategories: Array<string> = [],
    tags: Array<string> = []
  ): Array<Product> {
    const leakedProducts = FilterByPipe.prototype.transform(
      this.productsMain,
      subCategories,
      tags
    );

    return leakedProducts;
  }

  private _filterProductsByCategory(data: Array<Product>) {
    this.products = FilterByCategoryPipe.prototype.transform(
      data,
      this.category
    );
    this.productsMain = this.products;
  }
}
