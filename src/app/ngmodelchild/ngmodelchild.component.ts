import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngmodelchild',
  template:  `
              <button (click)="childDemo()">Click Me</button>
            `
})
export class NgmodelchildComponent{
  @Output() demo = new EventEmitter();
  childDemo(){
      this.demo.emit(console.log("Child Demo"));
      
  }

} 
