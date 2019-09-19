import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
 product: Product = new Product();
  constructor() { }

  ngOnInit() {

  }

}