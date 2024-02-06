import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { BlankpageComponent } from './layout/blankpage/blankpage.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'', redirectTo:'auth', pathMatch:'full'
      },
      {
        path:'auth',
        component:BlankpageComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)
      },
      {
        path:'dashboard',
        component:AdminlayoutComponent,
        loadChildren: ()=> import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path:'product',
        component:FullpageComponent,
        loadChildren: ()=> import('./modules/product/product.module').then(m =>m.ProductModule)
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
