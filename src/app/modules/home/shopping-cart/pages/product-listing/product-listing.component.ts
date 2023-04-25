import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit {
  products: Array<any> = ['product1', 'product2', 'product3'];
  constructor() {}

  ngOnInit(): void {}
}
