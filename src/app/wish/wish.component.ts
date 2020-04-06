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
    console.log(this.myDate);
    this.hours = this.myDate.getHours();
    console.log(this.hours);
    if(this.hours < 12){
      console.log("Good Morning");
      this.wishmsg = "Good Morning";
      this.wishImg = "https://i.pinimg.com/originals/11/54/d0/1154d0b28abda0440d246fe4c77c1c51.gif"
    }else if(this.hours >= 12 && this.hours <= 17){
      console.log("Good Afternoon");
      this.wishmsg = "Good Afternoon";
      this.wishImg = "https://i.pinimg.com/originals/61/80/da/6180da46110fb348c953c306906a7865.jpg"
    }else if (this.hours >= 17 && this.hours <= 24){
      console.log("Good Evening");
      this.wishmsg = "Good Evening";
      this.wishImg = "https://i.pinimg.com/564x/31/7a/71/317a71dd8de52b51e55ef5693ff9ee19.jpg";
    }
  }

}


/* let myDate = new Date();
let hrs = myDate.getHours();
if (hrs < 12)
    $("img").attr({
        src: "gm1.jpg",
        alt: "Good Morning"
    });
else if (hrs >= 12 && hrs <= 17)
    $("img").attr({
        src: "ga.jpg",
        alt: "Good Afternoon"
    });
else if (hrs >= 17 && hrs <= 24)
    $("img").attr({
        src: "gn.jpg",
        alt: "Good Night"
    }); */
 