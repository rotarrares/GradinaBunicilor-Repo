import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;

  constructor(public db: AngularFirestore) {
  this.productsCollection = this.db.collection('products');
  this.products = this.productsCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Product;
      data.id = a.payload.doc.id;
        return data;
    });
  }));
  }

  

  getProducts() {
    return this.products;
  }

  getStoreProducts(storeId:string){
    this.productsCollection = this.db.collection('products', ref => ref.where('storeId', "==", storeId));
    this.products = this.productsCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Product;
      data.id = a.payload.doc.id;
        return data;
    });
  }));
    return this.products;
  }

  addProduct(product: Product) {
    this.productsCollection.add(product);
  }

  deleteProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.delete();
  }

  updateProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.update(product);
  }


}