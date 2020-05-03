import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  onFormSubmitted = new EventEmitter<[any, any]>();
}
