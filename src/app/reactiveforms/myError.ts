import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNameValidator{
    static divisibleByTwo(control: AbstractControl): ValidationErrors | null{
        if(control.value % 2 !== 0){
            return { divisibleByTwo : true}
        }
        return null;
    }
}