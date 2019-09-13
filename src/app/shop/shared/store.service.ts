import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Store} from '../models/store';

@Injectable()
export class StoreService {
  store;
  constructor(private firestore: AngularFirestore) { 
     
  }
  ngOnInit(){
  }
  getStores() { 
    return this.firestore.collection<Store>("stores").snapshotChanges();
  }
  
  getStore(path: string) {
    return this.firestore.doc("stores/" + path).valueChanges();
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