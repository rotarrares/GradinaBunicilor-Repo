import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../../service/store.service'

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  store ;
  id:string;
  constructor(
    private route:ActivatedRoute,
    private storeService:StoreService,
  ) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('shopId');  
    });
    this.storeService.getStore(this.id).subscribe(
      res => (this.store = res.payload.data()));
  }

}