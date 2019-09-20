import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../shared/product.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@Input() product: Product;
@Input() canEdit:boolean;
hideText:boolean = false;
  constructor(private productService:ProductService,) { }

  ngOnInit() {
  }

  delete(){
    this.productService.deleteProduct(this.product);
  }
}