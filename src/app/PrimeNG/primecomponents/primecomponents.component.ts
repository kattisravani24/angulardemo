import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primecomponents',
  templateUrl: './primecomponents.component.html',
  styleUrls: ['./primecomponents.component.css']
})
export class PrimecomponentsComponent implements OnInit {
  cols: { field: string; header: string; }[];

  constructor() { }
  cars:any[];

  ngOnInit(): void {
    this.cars = [
      {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
      {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
      {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"}
  ];

  this.cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];

  }

}
 