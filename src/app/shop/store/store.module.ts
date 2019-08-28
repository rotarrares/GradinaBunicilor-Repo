import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 const routes: Routes = [{
    path: '/home',
        component: StoreComponent,
        children: [
        {
          path: '/login',
          component: AppComponent,
        },
        {
          path: '/registration',
          component: RegisterComponent,
        }
        ]
    }
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export StoreModule;