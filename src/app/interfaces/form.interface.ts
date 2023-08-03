import { FormGroup } from "@angular/forms";
import { Product, ProductControls } from "./product.interface";
import { Supplier, SupplierControls } from "./supplier.interface";

export interface FormFactory {
    createForm(data: Product | Supplier): FormGroup<any>;
}

export enum primitiveTypes {
    string = 'text',
    number = 'number',
    boolean = 'radio',
    object = 'object'
}

export type EditDialogData = {
    data: Product | Supplier,
    factory: FormFactory
}