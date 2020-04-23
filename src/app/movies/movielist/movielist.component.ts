import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})

export class MovielistComponent implements OnInit, OnChanges {
  movieList: string[]; 
  @Input() newMovieName:string;
  ngOnChanges() {
    if(this.newMovieName){
      this.movieList.push(this.newMovieName);
    }
  }
  ngOnInit(): void {
    this.movieList = ['Eshwar', 'Bujjigadu', 'Ek Niranjan'];
  }
}  
