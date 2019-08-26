import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class StoreService {
  producatori = [];
  constructor(private firestore: AngularFirestore) { }
  getStores() { 
      return this.firestore.collection("stores").snapshotChanges();
    }
}