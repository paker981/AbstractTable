import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormFactory } from "src/app/interfaces/form.interface";

import { Product, ProductColumn, ProductControls } from "src/app/interfaces/product.interface";
import { Supplier } from "src/app/interfaces/supplier.interface";

export class ProductForm implements FormFactory {
    controls = [ 
        {name: ProductColumn.ID, default: '', validators: [Validators.required]},
        {name: ProductColumn.NAME, default: '' as string ,validators: [Validators.required]},
        {name: ProductColumn.DESCRIPTION, default: '' as unknown as number  ,validators: [Validators.required]},
        {name: ProductColumn.LASTMODIFIED, default: '' as unknown as Date  ,validators: [Validators.required]},
        {name: ProductColumn.INSTOCK, default: false  ,validators: [Validators.required]},
    ]

    createForm(data: Product): FormGroup<ProductControls> {

        const form = new FormGroup<ProductControls>({
            id: new FormControl('' as unknown as number, Validators.required) as FormControl<number>,
            name: new FormControl('', Validators.required) as FormControl<string>,
            description: new FormControl('', Validators.required) as FormControl<string>,
            lastModified: new FormControl('' as unknown as Date, Validators.required) as FormControl<Date>,
            inStock: new FormControl(false, Validators.required) as FormControl<boolean>
        })

        // TODO: stworzył i zwrócił nowy form
        this.setControlValue(form, data);

        form.updateValueAndValidity();

        
        // form.patchValue
        // patch / put
        return form;
    }

    setControlValue(form: FormGroup<ProductControls>, data: Product){
        form.controls.id.setValue(data.id, {emitEvent: false});
        form.controls.name.setValue(data.name, {emitEvent: false});
        form.controls.description.setValue(data.description, {emitEvent: false});
        form.controls.lastModified.setValue(data.lastModified, {emitEvent: false});
        form.controls.inStock.setValue(data.inStock, {emitEvent: false});
    }
}