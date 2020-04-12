import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: 'child.component.html'
})

export class ChildComponent implements OnInit { 
    @Input() name:string;
    @Output() nameChange = new EventEmitter();
    /* @Input() pData;
    @Input() userNameFromParent:string;
   @Input() childAttr:string;
   @Input() aChild; */
    constructor() { }
  
    ngOnInit() { 
       
    }
    updateChildName(){
        this.name = (document.getElementById("child-name") as HTMLInputElement).value;
        this.nameChange.emit(this.name);
    }

} 