import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})

export class AddmovieComponent implements OnInit{
  @Output() movieEntered = new EventEmitter<string>();
  ngOnInit() {
  }
  addMovie(movieInput){ 
    this.movieEntered.emit(movieInput.value);
    movieInput.value = "";
  }
} 
