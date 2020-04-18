import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'eventbinding',
  templateUrl: './eventbinding.component.html'
})

export class EventbindingComponent implements OnInit{
  name:string;
  geeting:string;
  constructor(){}
  ngOnInit():void{
      this.geeting = ""; 
  }
  greetMe(e){
      console.log(e);
      this.name = 'Malathi';
      this.geeting = 'Aadya';
  }
  LogValue(v){
      console.log(v);
  }
}