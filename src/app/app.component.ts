import { Component } from '@angular/core';
import { CommonService } from './shared/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstApp';
  enableChild:boolean;
  constructor(private commonService:CommonService) { }

  validateUser(){
    let un = document.getElementById("username") as HTMLInputElement;
    this.commonService.setUserName(un.value);
    this.enableChild = true;
  }
}
 