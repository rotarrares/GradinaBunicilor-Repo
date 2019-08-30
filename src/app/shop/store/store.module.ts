import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';
import { StoreService } from '../../service/store.service'
import { ReactiveFormsModule } from '@angular/forms';
import { StoreComponent} from './store.component';
import { RouterModule } from '@angular/router';
import { StoreListComponent} from './store-list/store-list.component';
import { StoreDetailsComponent} from './store-details/store-details.component';
import { MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatRippleModule} from '@angular/material/core';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule} from '@angular/material/card';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { environment } from "../../../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatDividerModule,
    MatTooltipModule,
    MatToolbarModule,
    NgbModule,
    MatCardModule,
    MatRippleModule,],
  declarations: [
    StoreComponent,
    StoreListComponent,
    StoreDetailsComponent
    ],
  exports: [RouterModule],
  providers: [StoreService],
})
export class StoreModule{};