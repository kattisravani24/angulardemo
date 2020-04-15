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
    // console.log(this.movieName);
    if(this.movieName === ''){
      alert('Enter Movie Name');
    }
    else
    {
      this.newMovie = this.movieList.push(this.movieName);
    }
    (document.getElementById("addMovie") as HTMLInputElement).value = '';
  }
  onDeleteMovie(i){
    console.log(this.movieList.length-1);
    this.movieList.splice(i, 1)
  }
  onSearchMovie(){
    this.movieName = (document.getElementById("searchMovie") as HTMLInputElement).value;
    if(this.movieName === ''){
      alert('Enter Movie Name');
    }
  }
}