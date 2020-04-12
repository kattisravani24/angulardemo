import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngmodelchild',
  template:  `
              <ngmodelchildtwo (click)="childDemo()"></ngmodelchildtwo>
            `
})
export class NgmodelchildComponent{
  @Output() child = new EventEmitter();
  childDemo(){
      this.child.emit(console.log("Child One Demo"));
  } 
} 
