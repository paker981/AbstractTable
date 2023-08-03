import { Component, Inject } from '@angular/core';
import { FORM_FACTORY } from 'src/app/tokens/form-token';
import { SupplierForm } from '../form-supplier';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/components/edit-dialog/edit-dialog.component';
import { Supplier, SupplierColumn } from 'src/app/interfaces/supplier.interface';
import { SuppliersService } from 'src/app/modules/supplier/services/suppliers.service';
import { filter } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { EditDialogData, FormFactory } from 'src/app/interfaces/form.interface';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  providers: [ 
    {
      provide: FORM_FACTORY,
      useClass: SupplierForm
    }
  ]
})
export class SupplierListComponent {

  protected suppliers!: Supplier[]
  protected columns = SupplierColumn;


  constructor(private dialog: MatDialog, private supplierService: SuppliersService, private clipboard: Clipboard, @Inject(FORM_FACTORY) private formFactory: FormFactory ){
    this.supplierService.data.asObservable().subscribe((suppliers)=>{
      this.suppliers = suppliers;
    })
  }

  onEdit(supplierToEdit: any){
    if(!(supplierToEdit as Supplier)){
      return;
    }

    const dialogRef = this.dialog.open(EditDialogComponent, {width: '500px', height:'500px', data: {
      data: supplierToEdit , factory: this.formFactory } as EditDialogData
    }); 

    dialogRef.afterClosed().pipe(
      filter(res => Boolean(res)) // {} // najlepiej true i false
    ).subscribe((supplier: Supplier) => this.supplierService.edit(supplier));
  }

  onRemove(supplierToRemove: any){

    if(!(supplierToRemove as Supplier)){
      return;
    }

    this.supplierService.remove(supplierToRemove);
  }

  call(phone: number): void {
    console.log("You have been called to: ", phone);
  }

  copy(name: string): void {
    this.clipboard.copy(name);
  }
}
