import { validateHorizontalPosition } from "@angular/cdk/overlay";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Form } from "src/app/interfaces/form.interface";
import { Supplier } from "src/app/interfaces/supplier.interface";

export class SupplierForm implements Form {
    controls = [ 
        {name: 'id',default: 0 as unknown as number, validators: []},
        {name: 'name', default: '' as string ,validators: [Validators.required]},
        {name: 'score', default: '' as unknown as number  ,validators: [Validators.required,Validators.min(0),Validators.max(100)]},
        {name: 'phoneNumber', default: '' as unknown as number  ,validators: [Validators.required,Validators.minLength(9)]},
    ]

    createForm(form: FormGroup<any>): void {
        Object.keys(form.controls).forEach(controlName => {
            form.removeControl(controlName);
        });

        this.controls.forEach((elem)=>{
            form.addControl(elem.name, new FormControl(elem.default,elem.validators))
        });

        form.updateValueAndValidity();
    }
}