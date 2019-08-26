import {AngularFirestore} from "@angular/fire/firestore";
export class Store {
  id: string;
  name: string;
  rating: number;
  location : firebase.firestore.GeoPoint;
  
}