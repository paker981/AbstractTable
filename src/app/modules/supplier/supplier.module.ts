import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { FORM_TOKEN } from 'src/app/tokens/form-token';
import { SupplierForm } from './form-supplier';
import { AppModule } from 'src/app/app.module';
import { EditDialogComponent } from 'src/app/shared/dialogs/edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    SupplierListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    {
      provide: FORM_TOKEN,
      useClass: SupplierForm
    }
  ]
})
export class SupplierModule { }
