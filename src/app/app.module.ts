
import { MatCardModule} from '@angular/material/card'
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './service/cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { StoreComponent } from './shop/store/store.component';
import { StoreListComponent } from './shop/store/store-list/store-list.component';
import { StoreService } from './service/store.service';
import { StoreDetailsComponent } from './shop/store/store-details/store-details.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatRippleModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo : '/shop',pathMatch: 'full' },
      { path: 'shop', component: StoreComponent },
      { path: 'store/:storeId', component: StoreDetailsComponent },
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component:ShippingComponent },
      
    ])
  ],
  declarations: [
    AppComponent,
    
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    StoreComponent,
    StoreListComponent,
    StoreDetailsComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, StoreService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/