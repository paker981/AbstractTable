import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierForm } from './form-supplier';
import { AppModule } from 'src/app/app.module';
import { EditDialogComponent } from 'src/app/components/edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AbstractTableComponent } from 'src/app/components/abstract-table/abstract-table.component';
import { SuppliersService } from 'src/app/modules/supplier/services/suppliers.service';
import { MaterialModule } from 'src/app/shared/material/material.module'
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ScoreModifierPipe } from './pipes/score-modifier.pipe';
import { TemplateWithId } from 'src/app/directives/template-with-id.directive';


@NgModule({
  declarations: [
    SupplierListComponent,
    PhoneNumberPipe,
    ScoreModifierPipe
  ],
  imports: [
    SharedModule,
    MaterialModule,
    TemplateWithId,
  ],
  providers: [
    SuppliersService,
  ],
  exports: [
    SupplierListComponent,
  ]
})
export class SupplierModule { }
