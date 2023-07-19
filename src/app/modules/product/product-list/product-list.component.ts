import { Component, ContentChild } from '@angular/core';
import { FORM_TOKEN } from 'src/app/tokens/form-token';
import { ProductForm } from '../form-product';
import { Product } from 'src/app/interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/shared/dialogs/edit-dialog/edit-dialog.component';
import { filter } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { AbstractTableComponent } from 'src/app/components/abstract-table/abstract-table.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [AbstractTableComponent,
    {
      provide: FORM_TOKEN,
      useClass: ProductForm
    }
  ],
})
export class ProductListComponent {
  //@ContentChild(TableComponent) table!: TableComponent
  products!: Product[]

  

  constructor(private dialog: MatDialog, private productService: ProductsService){

    this.productService.listSubject.asObservable().subscribe((products)=>{
      this.products = products;
    })
  }

  onEdit(productToEdit: any){

    if(!(productToEdit as Product)){
      return;
    }

    const dialogRef = this.dialog.open(EditDialogComponent, {width: '400px', height:'400px', data: productToEdit});

    dialogRef.afterClosed().pipe(
      filter(res => Boolean(res)) // {} // najlepiej true i false
    ).subscribe((product: Product) => this.productService.edit(product));
  }

  onRemove(productToRemove: any){

    if(!(productToRemove as Product)){
      return;
    }

    this.productService.remove(productToRemove);
  }

  changeStateOfRow(row: any)
  {
    if(!(row as Product)){
      return;
    }
    this.productService.changeState((row.id))
  }
}

