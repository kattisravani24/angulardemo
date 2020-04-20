import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'removeDups'})
export class RemoveDuplicates implements PipeTransform{
  transform(arr:any[]){
    let i;
    let arrListLen = arr.length;
    let uniqueArr = [];
    for (i = 0; i < arrListLen; i++) {
      if (uniqueArr.indexOf(arr[i]) == -1) {
        uniqueArr.push(arr[i]);
      } 
    }
    return uniqueArr;
  }
}