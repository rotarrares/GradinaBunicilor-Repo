import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store} from '../models/store';
@Injectable()
export class StoreService {
  constructor(private firestore: AngularFirestore) { }
  getStores() { 
      return this.firestore.collection("stores").snapshotChanges();
    }
  addStore(store: Store){
    return this.firestore.collection("stores").add(store);
  }
}