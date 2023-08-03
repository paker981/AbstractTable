import { CommonModule } from '@angular/common';
import { Component, Inject, InjectionToken, OnInit, Type, WritableSignal, inject, signal } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditDialogData,  primitiveTypes } from 'src/app/interfaces/form.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { ControlTypePipe } from 'src/app/pipes/control-type.pipe';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
  imports: [
    CommonModule,
    MaterialModule,
    ControlTypePipe,
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class EditDialogComponent{
  protected form!: FormGroup<any>;
  protected formTypes = primitiveTypes;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: EditDialogData,
    private dialogRef: MatDialogRef<EditDialogComponent>,
  ){
    this.form = this.data.factory.createForm(this.data.data);
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

