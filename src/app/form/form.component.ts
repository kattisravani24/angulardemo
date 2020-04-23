import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'form-component',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
    constructor(){ }
    ngOnInit() {}
    inputControl(value){
        console.log(value);
    }
    
    onSubmit(myForm){
        console.log(myForm.value);
    }
}  