import { Component, OnInit } from '@angular/core';
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'md-points-history-page',
  templateUrl: './points-history-page.component.html',
  styleUrls: ['./points-history-page.component.css'],
})
export class PointsHistoryPageComponent implements OnInit {
  constructor(private _pointsService: PointsService) {}

  ngOnInit(): void {
    this._pointsService.setDataToSeePromotions();
  }
}
