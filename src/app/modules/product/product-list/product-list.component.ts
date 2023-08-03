import { Component, ContentChild, ContentChildren, Inject, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { FORM_FACTORY} from 'src/app/tokens/form-token';
import { ProductForm } from '../form-product';
import { Product, ProductColumn } from 'src/app/interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/components/edit-dialog/edit-dialog.component';
import { filter } from 'rxjs';
import { ProductsService } from 'src/app/modules/product/services/products.service';
import { AbstractTableComponent } from 'src/app/components/abstract-table/abstract-table.component';
import { Form } from '@angular/forms';
import { EditDialogData, FormFactory } from 'src/app/interfaces/form.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [
    {
      provide: FORM_FACTORY,
      useClass: ProductForm
    }
    // A*
    // B*
  ],
})
export class ProductListComponent {
  protected products!: Product[]
  protected columns = ProductColumn;


  // A korzysta z B
  // root => importuje A oraz B => A(B)
  // 
  // constructor(private a: A) { A*(B*) }
  constructor(private dialog: MatDialog, private productService: ProductsService, @Inject(FORM_FACTORY) private formFactory: FormFactory){

    this.productService.data.asObservable().subscribe((products)=>{
      this.products = products;
    })
  }

  onEdit(productToEdit: Product){
    if(!productToEdit){
      return;
    }

    const dialogRef = this.dialog.open(EditDialogComponent, {width: '500px', height:'500px', data: {
      data: productToEdit , factory: this.formFactory } as EditDialogData
    }); 
    
    // const dialogRef = this.dialog.open(EditDialogComponent, {viewContainerRef: this.viewContainerRef,width: '500px', height:'500px', data: {
      // productToEdit,
      // FORM_TOKEN

    dialogRef.afterClosed().pipe(
      filter(Boolean) // {} // najlepiej true i false
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

