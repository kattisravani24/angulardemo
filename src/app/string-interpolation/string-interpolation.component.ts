import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  addedString;
  stringToHide;
  hideString:boolean = true;
  constructor() { }
  ngOnInit(): void {
    this.addedString = "String added using String Interpolation";
    this.stringToHide = "I get hidden after 3 seconds";  
      setInterval(()=>{
        this.hideString = false;
      }, 3000);   
  }
} 
