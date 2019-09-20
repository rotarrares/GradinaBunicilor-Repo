import {AngularFirestore} from "@angular/fire/firestore";
export class Store {
  id: string;
  address: string;
  certification:boolean;
  cover: string;
  details: string;
  image: string;
  name: string;
  rating: number;
  location : firebase.firestore.GeoPoint;
  phone:string;
}