import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../shared/product.service'
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() storeId: string ;
  product = {} as Product;

  constructor(public dialogRef: MatDialogRef<ProductEditComponent>,
    private productService:ProductService,
  @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addProduct(){
    this.product.storeId = this.data.storeId;
    this.productService.addProduct(this.product);
    this.product = {} as Product;
  }

}