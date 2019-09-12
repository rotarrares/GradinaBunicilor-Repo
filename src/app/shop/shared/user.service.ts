import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserDetails } from '../models/user-details';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class UserService {
  user:UserDetails;
  userDocument:Observable<UserDetails>;
  constructor(private fireAuth: AngularFireAuth,
   private firestore:AngularFirestore) {
    if (this.fireAuth.auth.currentUser){
      this.userDocument = this._getData(this.fireAuth.auth.currentUser.uid);
      this.userDocument.subscribe(res => {
        this.user = res;
      });
    }
   }

  googleLogin() {
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  facebookLogin(){

  }

  logout() {
    this.fireAuth.auth.signOut();
  }

  getEmail(){
    return this.user.id;
  }

  checkRole(role:string){
    return role === this.user.id;
  }

  checkStoreId(id:string){
    return id === this.user.id;
  }

  private _getData(path: string) {
      return this.firestore.doc<UserDetails>("users/" + path).valueChanges();
    }



}