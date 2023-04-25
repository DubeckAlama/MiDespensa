import { Component, OnInit } from '@angular/core';
import { Pathlink } from '@app/core/enums';

import { PointsService } from '../../services/points.service';
import { Observable } from 'rxjs';

interface ButtonAction {
  title: string;
  path: Pathlink;
}

@Component({
  selector: 'md-dot-box',
  templateUrl: './dot-box.component.html',
  styleUrls: ['./dot-box.component.css'],
})
export class DotBoxComponent implements OnInit {
  actionButton$: Observable<ButtonAction> = this._pointsService.dataAction$;

  constructor(private _pointsService: PointsService) {}

  ngOnInit(): void {}
}
