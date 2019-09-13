import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class ProductService {

  constructor(private firestore: AngularFirestore) { }


  getProduct(ref:string){
    return this.firestore.doc(ref).valueChanges();
  }
}