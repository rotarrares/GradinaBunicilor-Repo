import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../service/store.service'
import { Store} from '../../../models/store';
import { Observable } from 'rxjs';
import { MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  stores;
  
  currentRate = 3.4;
  constructor(private storeService: StoreService) { 
   }

  ngOnInit() {
    this.getStores();

  }

  getStores = () => this.storeService.getStores().subscribe(
    res => (this.stores = res));
  
  
  addStore = (store: Store) => this.storeService.addStore(store);
}