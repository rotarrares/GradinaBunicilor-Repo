import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store} from '../models/store';
import {  AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable()
export class StoreService {
  constructor(private firestore: AngularFirestore) { 
     
  }
  ngOnInit(){
  }
  getStores() { 
      return this.firestore.collection<Store>("stores").snapshotChanges();
    }
  
  getStore(path: string) {
    return this.firestore.collection<Store>("stores").doc(path).snapshotChanges();
  }
  
  addStore(store: Store){
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("stores")
            .add(store)
            .then(res => {}, err => reject(err));
    });
  }
}