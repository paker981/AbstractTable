import { Component, Inject, OnInit, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Form, primitiveTypes } from 'src/app/interfaces/form.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { FORM_TOKEN } from 'src/app/tokens/form-token';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent{
  form!: FormGroup<any>;
  formTypes = primitiveTypes;


  createFormMethod = inject(FORM_TOKEN);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<EditDialogComponent>){
    this.form = new FormGroup([]);
    (this.createFormMethod as unknown as Form).createForm(this.form);
    this.setControlValue();

  }
  setControlValue(){
    Object.keys(this.form.controls).forEach((key)=>{
      this.form.controls[key].setValue(this.data[key])
    })
  }

  getControlType(control: AbstractControl): primitiveTypes {
    if (control instanceof FormControl) {
      const controlType = typeof control.value 
      return primitiveTypes[controlType as "string" || "number" || "boolean" || "date"];
    }
    return primitiveTypes.string;
  }

  onSubmit(): void{
    if(this.form.invalid){
      return;
    }
    this.dialogRef.close(this.form.value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
