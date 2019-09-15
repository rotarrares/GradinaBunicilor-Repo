import {AngularFirestore} from "@angular/fire/firestore";
export class Store {
  id: string;
  address: string;
  cover: string;
  details: string;
  image: string;
  name: string;
  rating: number;
  products:string[];
  location : firebase.firestore.GeoPoint;
  producatori: firebase.firestore.DocumentReference;
  
}