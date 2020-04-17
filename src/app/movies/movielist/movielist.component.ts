import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  @Input() movieList: string[];
  constructor() { }

  ngOnInit(): void {
    this.movieList = ['Eshwar', 'Bujjigadu', 'Ek Niranjan'];
  }

}
