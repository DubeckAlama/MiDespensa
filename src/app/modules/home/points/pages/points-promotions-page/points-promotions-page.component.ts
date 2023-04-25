import { Component, OnInit } from '@angular/core';
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'md-points-promotions-page',
  templateUrl: './points-promotions-page.component.html',
  styleUrls: ['./points-promotions-page.component.css'],
})
export class PointsPromotionsPageComponent implements OnInit {
  productsPoints: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private _pointsService: PointsService) {
    this._pointsService.setDataToViewHistory();
  }

  ngOnInit(): void {}
}
