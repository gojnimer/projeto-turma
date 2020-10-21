import { DataBindingComponent } from './data-binding/data-binding.component';
import { MainComponent } from './main/main.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';



const routes: Routes = [


  {path:"", component:MainComponent, canActivate:[AuthGuard]},
  {path:"data-binding", component:DataBindingComponent, canActivate:[AuthGuard]},

 
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
