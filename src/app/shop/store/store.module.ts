import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {StoreComponent} from './store.component';
import { RouterModule } from '@angular/router';
import {StoreListComponent} from './store-list/store-list.component';
import {StoreDetailsComponent} from './store-details/store-details.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule} from '@angular/material/card'

 const routes: Routes = [{
    path: '/shop',
        component: StoreComponent,
        children: [
        {
          path: '/list',
          component: StoreListComponent,
        },
        {
          path: '/:shopId',
          component: StoreDetailsComponent,
        }
        ]
    }];
@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes),
    MatDividerModule,
    MatTooltipModule,
    MatToolbarModule,
    MatCardModule,
    MatRippleModule,],
  declarations: [
    StoreComponent,
    StoreListComponent,
    StoreDetailsComponent
    ],
  exports: [RouterModule],
})
export class StoreModule{};