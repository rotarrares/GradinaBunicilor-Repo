import { Component, OnInit,Input } from '@angular/core';

import {ProductService} from '../../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: [];
  productList: [];
  constructor(
    private productService:ProductService,) { }

  ngOnInit() {
  }
  getProducts(){
      this.products.forEach(
        (product)=>{
          this.productList.push(this.productService.getProduct(product))
        }
      )
    }
}