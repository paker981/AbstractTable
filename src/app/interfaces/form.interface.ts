import { FormGroup } from "@angular/forms";

export interface Form {
    createForm(form: FormGroup): void;
}

export enum primitiveTypes {
    string = 'text',
    number = 'number',
    boolean = 'radio',
    date = 'date'
}