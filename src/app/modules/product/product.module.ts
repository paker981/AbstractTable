import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { EditDialogComponent } from 'src/app/components/edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductForm } from './form-product';
import { AppModule } from "../../app.module";
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AbstractTableComponent } from 'src/app/components/abstract-table/abstract-table.component';
import { ProductsService } from 'src/app/modules/product/services/products.service';
import { TextFormatRowPipe } from 'src/app/pipes/text-format-row.pipe';
import { MatButtonModule } from '@angular/material/button';
import { ProductClassPipe } from 'src/app/modules/product/pipes/product-class.pipe';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TemplateWithId } from 'src/app/directives/template-with-id.directive';

@NgModule({
    declarations: [
        ProductListComponent,   
        ProductClassPipe,
    ],
    imports: [
        SharedModule,
        MaterialModule,
        TextFormatRowPipe,
        TemplateWithId
    ],
    providers: [
        ProductsService,
    ],
    exports: [
        ProductListComponent,   
    ]
})
export class ProductModule { }
