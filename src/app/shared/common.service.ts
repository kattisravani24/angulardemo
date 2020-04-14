import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  userName:string;

  constructor() { }

  setUserName(name){
    this.userName = name;
  }

  getUserName(){
    return this.userName;
  }
}
