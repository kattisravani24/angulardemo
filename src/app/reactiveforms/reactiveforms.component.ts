import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { UserNameValidator } from './myError';

@Component({
  selector: 'reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  myForm:FormGroup;
  constructor() { }
  unPattern: any = '^[A-Za-z -]+$';
  // pwdPattern: any = '/^[a-zA-Z0-9@]*$/';
  ngOnInit(): void {
    this.myForm = new FormGroup({
    username: new FormControl('',
      [
        Validators.required, 
        Validators.minLength(3), 
        Validators.pattern(this.unPattern)
      ]),
    password: new FormControl('',
      [
        Validators.required, 
        Validators.minLength(8)])
    })
  }

  get username(){
    return this.myForm.get('username');
  }

  get password(){
    return this.myForm.get('password');
  }

}
