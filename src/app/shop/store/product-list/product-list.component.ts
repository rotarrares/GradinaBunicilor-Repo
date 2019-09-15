import { Component, OnInit,Input } from '@angular/core';

import {ProductService} from '../../shared/product.service';

import {AngularFirestore} from "@angular/fire/firestore";
import { Store} from '../../models/store';
import { Observable } from 'rxjs';
import { isObservable } from "rxjs";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() store: Observable<Store>;
  @Input() canEdit:boolean;
  productList: any[] = [];
  constructor(
    private productService:ProductService,) { 
    }
    
  ngOnInit() {
    if(isObservable<Store>(this.store))
      this.store.subscribe((store)=>{
        this.productList = [];
        store.products.forEach((productRef)=>{
          this.productList.push(this.productService.getProduct(productRef));
        }) 
      })
  }
  
}