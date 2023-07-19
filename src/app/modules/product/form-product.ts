import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Form } from "src/app/interfaces/form.interface";
import { Supplier } from "src/app/interfaces/supplier.interface";

export class ProductForm implements Form {
    controls = [ 
        {name: 'name', default: '' as string ,validators: [Validators.required]},
        {name: 'description', default: '' as unknown as number  ,validators: [Validators.required]},
        {name: 'lastModified', default: '' as unknown as Date  ,validators: [Validators.required]},
        {name: 'inStock', default: false  ,validators: [Validators.required]},
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