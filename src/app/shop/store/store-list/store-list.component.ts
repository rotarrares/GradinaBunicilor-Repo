import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { StoreService } from '../../shared/store.service'
import { Store} from '../../models/store';
import { Observable } from 'rxjs';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  
  stores : Store[];
  indexExpanded = -1;
 
  constructor(private storeService: StoreService) { 
    this.storeService.getStores().subscribe((stores) => 
    {this.stores = stores});
   }
  ngOnInit() {
  }

  openPanel(index: number) {
    if(this.indexExpanded != index)
    this.indexExpanded = index;
  }
  closePanel(index: number) {
    if(this.indexExpanded != index)
    this.indexExpanded = index;
  }
  
  
  addStore = (store: Store) => this.storeService.addStore(store);
}