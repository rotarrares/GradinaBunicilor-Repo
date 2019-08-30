import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/store.service'
import { Store} from '../../../models/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  stores;
  constructor(private storeService: StoreService) { 
   }

  ngOnInit() {
    this.getStores();

  }

  getStores = () => this.storeService.getStores().subscribe(
    res => (this.stores = res));
  
  
  addStore = (store: Store) => this.storeService.addStore(store);
}