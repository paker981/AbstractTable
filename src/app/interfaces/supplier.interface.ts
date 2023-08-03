import { FormControl } from "@angular/forms";

export interface Supplier {
    id: number,
    name: string;
    score: number;
    phone: number;
  }

  export enum SupplierColumn  {
    ID = 'id',
    NAME = 'name',
    SCORE ='score',
    PHONE = 'phone'
  }

  export type SupplierControls = {
    id: FormControl<number>,
    name: FormControl<string>,
    score: FormControl<number>,
    phone: FormControl<number>
  }