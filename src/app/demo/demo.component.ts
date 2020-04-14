import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {
  username:string;

  constructor(private commonService:CommonService) { }
  
  ngOnInit(): void {
    this.username = this.commonService.getUserName();
  }
}