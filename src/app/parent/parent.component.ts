import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'parent',
    templateUrl: 'parent.component.html'
})

export class ParentComponent implements OnInit {
    name:string;
    validLogin:boolean;
    username:string;
    password:string;
    parentFeild:string;
    constructor() { } 

    ngOnInit() {
        this.name = "Aadya";
        this.parentFeild = "Testing";
     }
     validateUser(){
         let user = document.getElementById("#un") as HTMLInputElement; 
         let pass = document.getElementById("#pwd") as HTMLInputElement ; 
         if(user.value === "aadya" && pass.value === "aadya"){
            this.username = user.value;
            this.password = pass.value;
            this.validLogin = true;
         }else{
             user.value = "";
             pass.value = "";
             alert("Invalid Credentials");
         }
     }
}
