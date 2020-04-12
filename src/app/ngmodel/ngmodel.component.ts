import { Component } from '@angular/core';
@Component({
    selector: 'ngmodel',
    template: `  
                <ngmodelchild (child)="parentDemo()"></ngmodelchild><br/>
             `
})
export class NgmodelComponent{
    parentDemo(){
        console.log("Parent Demo");
    }
}
 