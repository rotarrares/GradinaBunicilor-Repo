import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserDetails } from '../models/user-details';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class UserService {
  user:UserDetails;
  userDocument:Observable<UserDetails>;
  public isUserLoggedIn: BehaviorSubject<boolean>;
  constructor(private fireAuth: AngularFireAuth,
   private firestore:AngularFirestore) {
     if (this.fireAuth.auth.currentUser){
      this.isUserLoggedIn = new BehaviorSubject<boolean>(true);
      }
     this.updateUser();
   }

   ngOnInit(){
     
   }

  updateUser(){
    if (this.fireAuth.auth.currentUser){
      this.isUserLoggedIn.next(true);
      this._getData(this.fireAuth.auth.currentUser.uid);
    }
    else {
      this.isUserLoggedIn.next(false);
      this.user = null;
   }
  }

  googleLogin() {
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(()=>
    {
      
      this.updateUser();
    });
  }

  facebookLogin(){

  }

  logout() {
    this.fireAuth.auth.signOut().then(()=>
    {
     
      this.updateUser();
    });
  }

  getEmail(){
    if(this.user)
    return this.user.email;
    else return null;

  }

  checkRole(role:string){
    if(this.user)
    return role === this.user.role;
    else return false;
  }

  checkStoreId(id:string){
    if(this.user)
    {
    return id === this.user.storeid;
    }
    else return false;
  }

  private _getData(path: string) {
     this.firestore.doc<UserDetails>("users/" + path).valueChanges().pipe(map(a => {
      return a as UserDetails;
      })).subscribe((user)=>
        {
          console.log("User logged in" + user.email)

          this.user = user;  
        });
    }



}