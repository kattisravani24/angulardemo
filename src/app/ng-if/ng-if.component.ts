import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if',
  templateUrl: './ng-if.component.html'
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
