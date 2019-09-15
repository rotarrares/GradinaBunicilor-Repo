import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../shared/store.service';
import {UserService} from '../../shared/user.service';
import { Observable } from 'rxjs';
import { Store} from '../../models/store';
@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  store:Observable<Store> ;
  id:string;
  constructor(
    private route:ActivatedRoute,
    private storeService:StoreService,
    private userService:UserService,
  ) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('shopId');  
    });
    this.store = this.storeService.getStore(this.id);

  }
  

  canEdit(){
    return (this.userService.checkRole("producator") && this.userService.checkStoreId(this.id));
  }

}