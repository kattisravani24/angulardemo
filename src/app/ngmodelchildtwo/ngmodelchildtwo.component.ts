import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngmodelchildtwo',
  template: `
              <button (click)="childTwoDemo()">Child</button>
            `
})
export class NgmodelchildtwoComponent{
  @Output() childTwo = new EventEmitter();
  childTwoDemo(){
      this.childTwo.emit(console.log("Child Two Demo"));
  }
}
