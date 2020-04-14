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
  myPercent:number;
  alpha:string;
  numberArray:number[] = [11,22,33,44,55];
  strArray:string[] = ["Aadya", "Malathi"];
  numArr:number[] = [1,2,3,4,5,6,7];
  
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
    this.myPercent = 0.25;
    this.alpha = 'abcdefghijk';
  }

}
