import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'ng-class-eg',
  templateUrl: './ng-class-eg.component.html',
  styles: [`
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class NgClassEgComponent implements OnInit{
  classValue:string;
  textDanger;
  specialText;
  messageClasses;
  hasError:boolean;
  constructor(){}

  ngOnInit(){
    this.classValue = 'Text using';
    this.hasError = true;
    this.textDanger = 'text-danger';
    this.specialText = 'text-special';
    this.messageClasses = {
      "text-success": true,
      "text-danger": !this.textDanger,
      "text-special": this.specialText
    }
  }
}