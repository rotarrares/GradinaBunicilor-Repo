import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../shared/store.service';
import { UserService} from '../../shared/user.service';
import { Observable } from 'rxjs';
import { Store} from '../../models/store';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  store:Store ;
  id:string;
  isUserLoggedIn:boolean;

  constructor(
    private route:ActivatedRoute,
    private storeService:StoreService,
    private userService:UserService,
  ) { 
    this.route.paramMap.subscribe(params => {
      this.id = params.get('shopId');  
    });
    this.storeService.getStore(this.id).subscribe(
    res => (this.store = res));
    this.userService.isUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
        });
  }

  ngOnInit() {
    
  }
  

  

}