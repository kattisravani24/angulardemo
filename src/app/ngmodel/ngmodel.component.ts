import { Component } from '@angular/core';
@Component({
    selector: 'ngmodel',
    template: `  
                <ngmodelchild (demo)="parentDemo()"></ngmodelchild>
             `
})
export class NgmodelComponent{
    parentDemo(){
        console.log("Parent Demo");
    }
}
 