import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Store} from '../models/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StoreService {
  storeCollection: AngularFirestoreCollection<Store>;
  stores: Observable<Store[]>;
  storeDoc: AngularFirestoreDocument<Store>;
  currentStore: Observable<Store>;
  constructor(private firestore: AngularFirestore) { 
    console.log("Constructing Store service");
  this.storeCollection = this.firestore.collection('stores');
  this.stores = this.storeCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Store;
      data.id = a.payload.doc.id;
        return data;
    });
  }));
  }
  

  getStores() { 
    return this.stores;
  }
  
  getStore(path: string) {
    this.storeDoc = this.firestore.doc('stores/'+path);
    this.currentStore = this.storeDoc.snapshotChanges().pipe(map(a => {
      const data = a.payload.data() as Store;
      data.id = a.payload.id;
        return data;
    }));
    return this.currentStore;
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