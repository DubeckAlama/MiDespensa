import { Component, OnInit } from '@angular/core';
import { StylesSettingsService } from '@app/core/services';
import { ListingBoxService } from '@app/core/services';

@Component({
  selector: 'md-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css'],
})
export class MarketingComponent implements OnInit {
  constructor(private serviceLB: ListingBoxService,private serviceStyle: StylesSettingsService) {
    this.serviceStyle.selectTypeBreadCrumbs('medium');
    this.serviceStyle.selectTypeProductCard('2');
    this.serviceLB.setListinBoxBy('marketing');
  }

  ngOnInit(): void {}
}
