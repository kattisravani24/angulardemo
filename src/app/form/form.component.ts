import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'form-component',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
    constructor(){ }
    ngOnInit() {}
    inputFn(firstName){
        console.log(firstName);
    }
    inputLn(lastName){
        console.log(lastName);
    }
    inputComments(comments){
        console.log(comments);
    }
    onSubmit(myForm){
        console.log(myForm);
    }
}  