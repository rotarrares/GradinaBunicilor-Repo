import {AngularFirestore} from "@angular/fire/firestore";
export class Store {
  name: string;
  rating: number;
  location : firebase.firestore.GeoPoint;
  
}