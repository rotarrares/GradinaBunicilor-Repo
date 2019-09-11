import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserDetails } from '../models/user-details';


@Injectable()
export class UserService {
  user: UserDetails;
  userDocument;
  constructor(private fireAuth: AngularFireAuth, private firestore:AngularFirestore) {
    if (fireAuth.auth.currentUser){
      this.userDocument = this._getUser(fireAuth.auth.currentUser.uid);
      this.userDocument.subscribe(params => {
        this.user.role = params.role;
      });
    }
   }

private _getUser(path: string) {
    return this.firestore.doc("users/" + path).valueChanges();
  }

}