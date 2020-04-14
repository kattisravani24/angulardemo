import { Component, OnInit } from '@angular/core';
import { EmpService } from '../shared/emp.service';

@Component({
  selector: 'emp-details',
  templateUrl: './emp-details.component.html'
})
export class EmpDetailsComponent implements OnInit {
  employees = [];

  constructor(private _empService: EmpService) { }

  ngOnInit() {
    this._empService.getEmployees()
    .subscribe(data => this.employees = data);
  }

}
