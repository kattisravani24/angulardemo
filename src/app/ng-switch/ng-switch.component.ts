import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ng-switch',
    templateUrl: './ng-switch.component.html'
})

export class NgSwitchComponent implements OnInit{
   color:string;
    ngOnInit():void{
        this.color = 'purple';
    }
} 