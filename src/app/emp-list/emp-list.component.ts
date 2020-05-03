import { Component, OnInit } from '@angular/core';
import { EmpService } from '../shared/emp.service';

@Component({
  selector: 'emp-list',
  templateUrl: './emp-list.component.html'
})
export class EmpListComponent implements OnInit {

  employees = [];

  constructor(private _empService: EmpService) { }

  ngOnInit() {
    this._empService.getEmployees()
    .subscribe(data => this.employees = data);
  }
 
}
