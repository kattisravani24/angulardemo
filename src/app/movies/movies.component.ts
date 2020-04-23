import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movieToAdd:string;
  ngOnInit(): void {
  }
  getMovieName(event){
    this.movieToAdd = event;
  }
}  