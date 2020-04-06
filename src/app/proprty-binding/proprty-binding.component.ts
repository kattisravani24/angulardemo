import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proprty-binding',
  templateUrl: './proprty-binding.component.html',
  styleUrls: ['./proprty-binding.component.css']
})
export class ProprtyBindingComponent implements OnInit {
  imgUrl;
  constructor() { }

  ngOnInit(): void {
    this.imgUrl = "https://thumbs.dreamstime.com/z/guitar-girl-jrock-female-guitarist-vector-art-music-rock-pop-128799544.jpg";
  }

} 
