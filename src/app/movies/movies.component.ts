import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList:string[];
  movieName:string;
  newMovie;
  constructor() { }
  ngOnInit(): void {
    this.movieList = ['Bujjigadu', 'Mr. Perfect', 'Darling']
  }
  onAddingMovie(){
    this.movieName = (document.getElementById("addMovie") as HTMLInputElement).value;
    console.log(this.movieName);
    this.newMovie = this.movieList.push(this.movieName);
    (document.getElementById("addMovie") as HTMLInputElement).value = '';
  }
}