import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test;
  counter;
  stopCounter;
  showBtn:boolean = false;
  constructor() { }  

  ngOnInit(): void {
    this.test = "testing";
    this.counter = 0;
     setTimeout(() => {
      this.test = "test from setTimeOut";
    }, 10000);
    setInterval(()=>{
      this.showBtn = true;
    }, 5000);
    this.stopCounter = setInterval(()=>{
      this.counter++;
      if(this.counter === 10){ 
        this.stop();
      }
    }, 1000);
  }stop() {
    clearInterval(this.stopCounter);
  }
  
}
