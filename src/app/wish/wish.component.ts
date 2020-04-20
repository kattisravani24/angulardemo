import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  wishmsg;
  myDate;
  hours;
  wishImg;
  constructor() { }
  ngOnInit(): void {
    this.myDate = new Date();
    this.hours = this.myDate.getHours();
    if(this.hours < 12){
      this.wishmsg = "Good Morning";
      this.wishImg = "https://i.pinimg.com/originals/11/54/d0/1154d0b28abda0440d246fe4c77c1c51.gif"
    }else if(this.hours >= 12 && this.hours <= 17){
      this.wishmsg = "Good Afternoon";
      this.wishImg = "https://i.pinimg.com/originals/61/80/da/6180da46110fb348c953c306906a7865.jpg"
    }else if (this.hours >= 17 && this.hours <= 24){
      this.wishmsg = "Good Evening";
      this.wishImg = "https://i.pinimg.com/564x/31/7a/71/317a71dd8de52b51e55ef5693ff9ee19.jpg";
    }
  }
}