import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  /* movieName:string;
  newMovie;
  addMovieList:string[]; */

  @ViewChild('demo') in:ElementRef;
   ngOnInit(): void {
  }
/*
  addMovie(){
    this.movieName = (document.getElementById("addMovie") as HTMLInputElement).value;
    if(this.movieName === ''){
      alert('Enter Movie Name');
    }
    else
    {
      this.newMovie = this.addMovieList.push(this.movieName);
    }
    (document.getElementById("addMovie") as HTMLInputElement).value = '';
  } */

  myValue(){
    console.log(this.in.nativeElement.value);
  }

  
}
