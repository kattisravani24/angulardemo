import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: 'child.component.html'
})

export class ChildComponent implements OnInit { 
    @Input() pData;
//    @Input() userNameFromParent:string;
   @Input() childAttr:string;
    constructor() { }
 
    ngOnInit() { 
       
    }
}