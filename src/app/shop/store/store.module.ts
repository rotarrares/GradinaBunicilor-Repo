import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {StoreComponent} from './store.component';
import { RouterModule } from '@angular/router';
import {StoreListComponent} from './store-list/store-list.component';
import {StoreDetailsComponent} from './store-details/store-details.component';

 const routes: Routes = [{
    path: '/shop',
        component: StoreComponent,
        children: [
        {
          path: './list',
          component: StoreListComponent,
        },
        {
          path: '/:shopId',
          component: StoreDetailsComponent,
        }
        ]
    }];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreModule{};