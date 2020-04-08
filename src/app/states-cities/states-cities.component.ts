import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'states-cities',
  templateUrl: './states-cities.component.html',
  styleUrls: ['./states-cities.component.css']
})
export class StatesCitiesComponent implements OnInit {

  cars: any;
  names:string[];
  // persons:{name:string, age:number}[];
  states:{state:string, city:string}[];
  myColor:string;
  constructor() { }

  ngOnInit(): void { 
    /* this.names = ["malathi","aadya"];
    this.persons = [{name: "malathi", age: 24}, {name:"aadya", age:2}]; */
    this.myColor = "purple";
    this.states = [{state: "Telangana", city: "Hyderabad, Warangal"}, {state:"Andhra Pradesh", city:"Amaravathi"},{state: "Arunacha Pradesh", city: "Itanagar"}, {state:"Bihar", city:"Patna"},{state: "Chhattisgarh", city: "Raipur"}, {state:"Goa", city:"Panaji"},{state: "Gujrat", city: "Gandhinagar"}, {state:"Haryana", city:"Chandigarh"},{state: "Himachal Pradesh", city: "Shimla"}, {state:"Jammu and Kashmir", city:"Srinagar and Jammu"},{state: "Jharkhad", city: "Ranchi"}, {state:"Karnataka", city:"Bengaluru"},{state: "Kerala", city: "Thiruvananthapuram"}, {state:"Madya Pradesh", city:"Bhopal"},{state: "Maharashtra", city: "Mumbai"}];
    this.cars = [
      {
        "name": "MG Hector",
        "color": 'blue'
      },
      {
        "name": "Ford",
        "color": 'olive'
      }
    ];
  
  }
  clicked(){
    this.myColor = "green";
  }
}
