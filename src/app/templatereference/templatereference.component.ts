import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'templatereference',
  templateUrl: './templatereference.component.html'
})
export class TemplatereferenceComponent implements OnInit, AfterViewInit {
  @ViewChild('demo') in:ElementRef; 
  @ViewChild('counter') para:ElementRef;
  @ViewChild('myH4') myHeadingTag;
  count:number;
  ngOnInit(): void {
    // console.log(this.myHeadingTag); -> undefined
  }
  myValue(){
    //console.log(this.in.nativeElement.value);
  }
  inCounter(){
    this.count++;
  }
  ngAfterViewInit() {
    // console.log(this.myHeadingTag);
    const heading = this.myHeadingTag.nativeElement;
    // console.log(heading.innerHTML);
    // To set heading
    //this.myHeadingTag.nativeElement.innerHTML = "New Heading"; 
  }
}
