import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ngcomponent',
  templateUrl: './ngcomponent.component.html'
})
export class NgcomponentComponent implements OnInit {
  persons: {name:string, age:number}[];
  toggleName:boolean = false;
  constructor() { }
  ngOnInit(): void {
    this.persons = [{
      name: "Aadya",
      age: 3
    },
    {
      name: "Aadvik",
      age: 1
    }];
  }
}
