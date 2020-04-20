import { Directive, ElementRef, Input, HostListener } from '@angular/core';
@Directive({
  selector: '[first]'
})
export class FirstDirective {
  constructor(private eleRef:ElementRef) { }
  @Input() check:string;
  inValue = this.eleRef.nativeElement;
  @HostListener('blur')
  onBlur(){
    console.log('blur');
    console.log(this.inValue.value);
    if(this.check === 'lowercase'){
      this.inValue.value = this.inValue.value.toLowerCase();
    }
    else if(this.check === 'uppercase'){
      this.inValue.value = this.inValue.value.toUpperCase();
    }
    else if(this.check === 'titlecase'){
      console.log(this.inValue.value);
      this.inValue.value = this.titleCase(this.inValue.value);
    }
    else if(this.check === 'camelcase'){
      console.log(this.inValue.value);
      this.inValue.value = this.camelCase(this.inValue.value);
    }
  }
  titleCase(str) {
    return str.replace(/\b\w/g, first => first.toLocaleUpperCase());
    // str = str.toLowerCase().split(' ');
    // for (var i = 0; i < str.length; i++) {
    //   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    // }
    // return str.join(' ');
  }
  camelCase(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
        return chr.toUpperCase();
      });
  }
}