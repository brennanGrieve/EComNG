import { Component, Input, OnInit } from '@angular/core';
import { StoreItem } from '../store-item';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  @Input()
  displayData : StoreItem[];

  constructor() { }

  ngOnInit() {
  }

}
