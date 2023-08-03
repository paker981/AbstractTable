import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
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
import { SharedModule } from './shared/shared/shared.module';
import { AbstractTableComponent } from './components/abstract-table/abstract-table.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { ProductModule } from './modules/product/product.module';
import { TextFormatRowPipe } from './pipes/text-format-row.pipe';
import { ControlTypePipe } from './pipes/control-type.pipe';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MatListModule } from '@angular/material/list';
import { ProductClassPipe } from './modules/product/pipes/product-class.pipe';
import { SupplierModule } from './modules/supplier/supplier.module';
import { MaterialModule } from './shared/material/material.module';
import { RecordTableComponent } from './components/abstract-table/record-table/record-table/record-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductModule,
    SupplierModule
  ],
  exports: [],
  providers: [
    // ... wszystkei providersy z importowanych modułów
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
