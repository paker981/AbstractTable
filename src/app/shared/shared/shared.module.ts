import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDialogComponent } from '../dialogs/edit-dialog/edit-dialog.component';
import { TableComponent } from '../table/table.component';
import { AppModule } from 'src/app/app.module';
import { RouterModule } from '@angular/router';
import { AbstractTableComponent } from 'src/app/components/abstract-table/abstract-table.component';

@NgModule({
  declarations: [AbstractTableComponent],
  imports: [
    CommonModule,
  ],
  exports: [AbstractTableComponent]
})
export class SharedModule { }
