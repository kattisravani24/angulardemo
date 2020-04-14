import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {
  str:string;
  money:number;
  personeDetails:object;
  date: number;
  currentDate;
  constructor() { }
 
  ngOnInit(): void {
    this.str = 'welcome to angular';
    this.money = 0.25;
    this.personeDetails = {
      name: "Aadya",
      age: 3
    }
    this.date = Date.now();
    this.currentDate = new Date();
  }

}
