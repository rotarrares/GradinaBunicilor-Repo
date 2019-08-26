import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../service/store.service'
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
  }

  getStores = () => this.storeService.getStores().subscribe(res => this.stores = res);
  

}