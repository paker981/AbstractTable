import { Injectable } from '@angular/core';
import { products } from '../environment/data';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  listSubject = new BehaviorSubject<Product[]>(products);

  constructor() { }

  updateIndex(list: Product[]){
    list.forEach((product,index) => product.id = index)
  }

  // Metoda usuwająca element z listy
  remove(product: Product): void {
    const newList = this.listSubject.getValue().filter(productInList => productInList.id !== product.id);
    this.updateIndex(newList);
    this.listSubject.next(newList);
  }
  
  // Metoda edytująca element w liście
  edit (product: Product): void {
    const list = this.listSubject.getValue();
    const productToUpdate = list.find(productInList => productInList.id === product.id);
  
    if (productToUpdate) {
      productToUpdate.name = product.name;
      productToUpdate.description = product.description
      productToUpdate.inStock = product.inStock;
      productToUpdate.lastModified = new Date();
      this.listSubject.next([...list]);
    }
  }

  changeState(id: number){
    const list = this.listSubject.getValue();
    const productToUpdate = list.find(productInList => productInList.id === id);

    if(productToUpdate){
      productToUpdate.inStock = !productToUpdate.inStock;
      productToUpdate.lastModified = new Date();
      this.listSubject.next([...list]);
    }
  }

}
