import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-product-bonus-listing',
  templateUrl: './product-bonus-listing.component.html',
  styleUrls: ['./product-bonus-listing.component.css'],
})
export class ProductBonusListingComponent implements OnInit {
  bonuses: Array<{ title: string }> = [
    { title: 'Por compras entre 10 y 80, por cada 20 lleva' },
    { title: 'Por compras entre 81 y 120, por cada 90 lleva' },
    { title: 'Por compras entre 121 y 300, por cada 130 lleva' },
    { title: 'Por compras entre 301 y 400, lleva' },
    { title: 'Por compras entre 400 y 600, por cada 450 lleva' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
