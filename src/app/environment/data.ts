import { Product } from "../interfaces/product.interface";
import { Supplier } from "../interfaces/supplier.interface";

export const products: Product[] = [
    {id: 0, name: 'Cereals', description: 'dsadsgffdgfd', lastModified: new Date(), inStock: false},
    {id: 1, name: 'Sausages', description: 'dgfdgfgdfgfdd', lastModified: new Date(), inStock: true},
    {id: 2, name: 'Beer', description: 'dsadsgffdgfd', lastModified: new Date(), inStock: false},
    {id: 3, name: 'Cucumbers', description: 'gbvvnvbaffd', lastModified: new Date("2022-03-29"), inStock: true},
    {id: 4, name: 'Pizza', description: 'dcxzc', lastModified: new Date("2021-04-05"), inStock: false},
]

export const suppliers: Supplier[] = [
    {id: 0, name: 'ACB', score: 88, phone: 999555666},
    {id: 1, name: 'Unic-FC', score: 14, phone: 999555666},
    {id: 2, name: 'Example Supplier', score: 66, phone: 999555666},
    {id: 3, name: 'WCA', score: 52, phone: 999455666},
    {id: 4, name: 'IPF', score: 47, phone: 999555666},
]
