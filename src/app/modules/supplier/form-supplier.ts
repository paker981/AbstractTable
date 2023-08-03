import { validateHorizontalPosition } from "@angular/cdk/overlay";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormFactory } from "src/app/interfaces/form.interface";
import { Supplier, SupplierColumn, SupplierControls } from "src/app/interfaces/supplier.interface";

export class SupplierForm implements FormFactory {
    controls = [ 
        {name: SupplierColumn.ID,default: 0 as unknown as number, validators: []},
        {name: SupplierColumn.NAME, default: '' as string ,validators: [Validators.required]},
        {name: SupplierColumn.SCORE, default: '' as unknown as number  ,validators: [Validators.required,Validators.min(0),Validators.max(100)]},
        {name: SupplierColumn.PHONE, default: '' as unknown as number  ,validators: [Validators.required,Validators.minLength(9)]},
    ]

        createForm(data: Supplier): FormGroup<SupplierControls> {

            const form = new FormGroup<SupplierControls>({
                id: new FormControl('' as unknown as number, Validators.required) as FormControl<number>,
                name: new FormControl('', Validators.required) as FormControl<string>,
                score: new FormControl('' as unknown as number, [Validators.required,Validators.min(0),Validators.max(100)]) as FormControl<number>,
                phone: new FormControl('' as unknown as number, [Validators.required,Validators.minLength(9)]) as FormControl<number>,
            })
    
            // TODO: stworzył i zwrócił nowy form
            this.setControlValue(form, data);
    
            form.updateValueAndValidity();
    
            return form;
        }
    
        setControlValue(form: FormGroup<SupplierControls>, data: Supplier){
            form.controls.id.setValue(data.id);
            form.controls.name.setValue(data.name);
            form.controls.score.setValue(data.score);
            form.controls.phone.setValue(data.phone);
        }
}
