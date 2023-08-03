import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDialogComponent } from '../../components/edit-dialog/edit-dialog.component';
import { AppModule } from 'src/app/app.module';
import { RouterModule } from '@angular/router';
import { AbstractTableComponent } from 'src/app/components/abstract-table/abstract-table.component';
import { TextFormatRowPipe } from 'src/app/pipes/text-format-row.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlTypePipe } from 'src/app/pipes/control-type.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { ProductClassPipe } from 'src/app/modules/product/pipes/product-class.pipe';
import {MatMenuModule} from '@angular/material/menu';
import { ProductForm } from 'src/app/modules/product/form-product';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AbstractTableComponent,
    EditDialogComponent,
    TextFormatRowPipe,
  ],
  providers: [],
  exports: [
    AbstractTableComponent,// AbstractTableModule
    CommonModule,
    EditDialogComponent,
    TextFormatRowPipe
  ]
})
export class SharedModule { }
