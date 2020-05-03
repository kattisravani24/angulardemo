import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/form.service';
@Component({
  selector: 'formlistener',
  templateUrl: './formlistener.component.html',
  styleUrls: ['./formlistener.component.css']
})
export class FormlistenerComponent implements OnInit {
  constructor(private formService: FormService) { }
  ngOnInit(): void {
    this.formService.onFormSubmitted.subscribe( (numonevalue, numtwovalue) => {
      this.onFormSubmit(numonevalue, numtwovalue);
   })
  }
  onFormSubmit(numonevalue, numtwovalue) {
    console.log( Number(numonevalue)  + Number(numtwovalue));
  }
}
