import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'reverseArray'})
export class ReverseArray implements PipeTransform{
    transform(arr: any[] ){
        return arr.reverse();
    }
}