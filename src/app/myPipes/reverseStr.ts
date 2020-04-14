import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverseStr' })
export class ReverseStr implements PipeTransform{
    transform(str: string) {
            return str.split('').reverse().join('');               
        }
    }
