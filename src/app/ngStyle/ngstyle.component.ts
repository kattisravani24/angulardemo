import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngStyle-directive',
    templateUrl: './ngstyle.component.html'
})

export class NgstyleComponent implements OnInit{
    name:string;
    myColor;
    hasError:boolean;
    myStyles:object;
    constructor(){}

    ngOnInit():void{
        this.name = 'Malathi';
        this.myColor = 'magenta';
        this.hasError = true;
        this.myStyles = {
            color: 'purple',
            fontStyle: 'italic'
        }
    }
}