import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-class-eg',
  templateUrl: './ng-class-eg.component.html',
  styleUrls: ['./ng-class-eg.component.css']
})
export class NgClassEgComponent implements OnInit { 
  div;
  movies:{name:string, movie:string}[];
  people:{name:string, hobby:string}[];

  cartoon:string[];
  myStyles;
  cartoonColor:string;
  constructor() { }

  ngOnInit(): void {
    this.div = document.querySelector('div');
    this.div.className = 'active';
    console.log(this.div.className);

    this.cartoon = ["Tom", "Jerry", "Shinchan"];

    this.movies = [{
      name: "Prabhas",
      movie: "Bujjigadu"
    },
    {
      name: "Vishal",
      movie: "Padem Kodi"
    }
    ];
    
    this.myStyles = {
      color : 'purple',
      backgroundColor: '#ddd'
    }

    this.cartoonColor = 'magenta';

    this.people = [{
      name: "Aadya",
      hobby: "Singing"
    },
    {
      name: "Aadvik",
      hobby: "Dancing"
    }
    ];
  }

  getColor(hobby){
    switch(hobby){
      case 'Singing':
        return 'blue';
      case 'Dancing':
        return 'brown'
    }
  }
}
