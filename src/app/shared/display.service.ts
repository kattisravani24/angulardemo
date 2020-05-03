import { Injectable } from '@angular/core';

@Injectable()
 export class DisplayService {
     display(str: string){
        return 'Hello ' + str;
     }
 }