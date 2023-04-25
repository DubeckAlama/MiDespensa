import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-details-pane',
  templateUrl: './details-pane.component.html',
  styleUrls: ['./details-pane.component.css'],
})
export class DetailsPaneComponent implements OnInit {
  product: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
