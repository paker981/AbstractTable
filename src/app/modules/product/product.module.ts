import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { EditDialogComponent } from 'src/app/shared/dialogs/edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FORM_TOKEN } from 'src/app/tokens/form-token';
import { ProductForm } from './form-product';
import { AppModule } from "../../app.module";
import { TableComponent } from 'src/app/shared/table/table.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AbstractTableComponent } from 'src/app/components/abstract-table/abstract-table.component';





@NgModule({
    declarations: [
        ProductListComponent,   
    ],
    providers: [
        {
            provide: FORM_TOKEN,
            useClass: ProductForm
        }
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: []
})
export class ProductModule { }
