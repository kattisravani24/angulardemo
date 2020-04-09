import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  displayName: boolean;
  hideName: boolean;
  constructor() { }

  ngOnInit(): void {
    this.displayName = true;
    this.hideName = false;
  }

}
