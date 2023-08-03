import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { primitiveTypes } from '../interfaces/form.interface';

@Pipe({
  name: 'controlType',
  standalone: true,
})
export class ControlTypePipe implements PipeTransform {

  transform(control: AbstractControl): primitiveTypes {
    if (control instanceof FormControl) {
      const controlType = typeof control.value 
      console.log(controlType);
      return primitiveTypes[controlType as "string" || "number" || "boolean" || "object"];
    }
    return primitiveTypes.string;
  }
}
