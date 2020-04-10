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
    isParent:boolean;
    child;
    constructor() { } 

    ngOnInit() {
        this.name = "Aadya";
        this.parentFeild = "Testing";
        this.isParent = true;
        this.child = "We are Children";
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
     showChildren(){
         this.isParent = false;
     }
     showParents(){
         this.isParent = true;
     }
}
