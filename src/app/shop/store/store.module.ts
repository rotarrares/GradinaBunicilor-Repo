import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';

import { StoreService } from '../shared/store.service';
import { ProductService } from '../shared/product.service';
import { UserService } from "../shared/user.service"

import { ReactiveFormsModule } from '@angular/forms';
import { StoreComponent} from './store.component';
import { RouterModule } from '@angular/router';
import { StoreListComponent} from './store-list/store-list.component';
import { StoreDetailsComponent} from './store-details/store-details.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { environment } from "../../../environments/environment";
import { UserDetails } from '../models/user-details';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

import { MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatRippleModule} from '@angular/material/core';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule} from '@angular/material/button'
import { MatAccordion} from '@angular/material';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatBadgeModule} from '@angular/material/badge';
import { MatSelectModule} from '@angular/material';
import { MatDialogModule,MatDialogRef} from '@angular/material/dialog';


import { AgmCoreModule } from '@agm/core';
import {MapsAPILoader} from '@agm/core';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

 const routes: Routes = [{
    path: 'shop',
        component: StoreComponent,
        children: [
        {
          path: '',
          component: StoreListComponent,
        },
        {
          path: ':shopId',
          component: StoreDetailsComponent,
        }
        ]
    }];
@NgModule({
  imports: [CommonModule,
    BrowserModule,
    
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsZF4S79MWila_qTrBQ1P9Qti1LrGIL9Q',
      libraries: ['places'],
    }),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatRippleModule,
    MatInputModule,
    MatSelectModule,
    ],
  declarations: [
    TopBarComponent,
    StoreComponent,
    StoreListComponent,
    StoreDetailsComponent,
    AuthComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ],
  
  exports: [RouterModule],

  entryComponents: [
    ProductEditComponent
  ],

  providers: [StoreService,
  AngularFireAuth,
  UserService,
  ProductService,
	 {provide: MatDialogRef, useValue: {}}],
})
export class StoreModule{};