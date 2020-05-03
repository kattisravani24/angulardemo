import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/form.service';
@Component({
  selector: 'formemitter',
  templateUrl: './formemitter.component.html',
  styleUrls: ['./formemitter.component.css']
})
export class FormemitterComponent implements OnInit {
  constructor(private formService: FormService) { }
  ngOnInit(): void {
  }
  onFormSubmit(numone, numtwo) {
    const numonevalue = numone.value;
    const numetwovalue = numtwo.value;
    this.formService.onFormSubmitted.emit([numonevalue, numetwovalue]);
 }  
}
