import { FormControl } from "@angular/forms";

export interface Product {
    id: number;
    name: string;
    description: string;
    lastModified: Date;
    inStock: boolean;
  }

export type ProductControls ={
  id: FormControl<number>,
  name: FormControl<string>,
  description: FormControl<string>,
  lastModified: FormControl<Date>,
  inStock: FormControl<boolean>
}


export enum ProductColumn  {
  ID = 'id',
  NAME = 'name',
  DESCRIPTION ='description',
  LASTMODIFIED = 'lastModified',
  INSTOCK = 'inStock'
}