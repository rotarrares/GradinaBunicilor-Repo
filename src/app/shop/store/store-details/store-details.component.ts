import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../../service/store.service'

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  store;
  constructor(
    private route:ActivatedRoute,
    private storeService:StoreService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.storeService.getStore(params.get('storeId')).subscribe(
      res => (this.store = res));
    });
  }

}