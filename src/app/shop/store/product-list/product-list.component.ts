import { Component, OnInit,Input, Inject } from '@angular/core';

import { ProductService} from '../../shared/product.service';

import { AngularFirestore} from "@angular/fire/firestore";
import { Store} from '../../models/store';
import { Product} from '../../models/product';
import {UserService} from '../../shared/user.service';
import { Observable } from 'rxjs';
import { isObservable } from "rxjs";
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductEditComponent } from '../product-edit/product-edit.component';

export interface DialogData {
  product:Product;
  storeId: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() store: string;
  productList: any;
  products: Product[];
  userCanEdit:boolean;
  isUserLoggedIn:boolean;

  constructor(
    private productService:ProductService,
    public dialog: MatDialog,
    private userService:UserService,
    ) { 
      this.userService.isUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
        });
    }
    
  ngOnInit() {
     this.productService.getStoreProducts(this.store).subscribe((products) => {
      this.products = products;
    });    
  }
  
  canEdit(){
    this.userCanEdit = (this.userService.checkRole("producator") && this.userService.checkStoreId(this.store));
    return this.userCanEdit;
  }

  openDialog(storeId): void {
    const dialogRef = this.dialog.open(ProductEditComponent, {
      data: {storeId:storeId}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}