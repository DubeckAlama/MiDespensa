import { Injectable } from '@angular/core';
import { Pathlink } from '../../../../core/enums/app/path-link';
import { BehaviorSubject } from 'rxjs';

interface ButtonAction {
  title: string;
  path: Pathlink;
}

@Injectable({
  providedIn: 'root',
})
export class PointsService {
  // *properties
  private _buttonAction = new BehaviorSubject<ButtonAction>({} as ButtonAction);
  readonly dataAction$ = this._buttonAction.asObservable();

  constructor() {
    this.setDataToViewHistory();
  }

  // *method to manipulate the button
  setDataToViewHistory() {
    const newButtonTitle = 'Historial de puntos';
    const newPathForButton = Pathlink.points_history;
    const data = { title: newButtonTitle, path: newPathForButton };
    this._buttonAction.next(data);
  }

  setDataToSeePromotions() {
    const newButtonTitle = 'Ver promociones';
    const newPathForButton = Pathlink.points_promotions;
    const data = { title: newButtonTitle, path: newPathForButton };
    this._buttonAction.next(data);
  }
}
