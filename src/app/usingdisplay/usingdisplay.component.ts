import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../shared/display.service';

@Component({
  selector: 'usingdisplay',
  templateUrl: './usingdisplay.component.html',
  styleUrls: ['./usingdisplay.component.css']
})
export class UsingdisplayComponent implements OnInit {
  msg: string;
  constructor(myStr: DisplayService) { 
    this.msg = myStr.display('Aadya');
  }

  ngOnInit(): void {
  }

}
