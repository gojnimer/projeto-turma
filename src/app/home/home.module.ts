import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarService } from './../components/navbar.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({
  declarations: [MainComponent, DataBindingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports:[MainComponent,DataBindingComponent],
  providers: [NavbarService],
  
})
export class HomeModule { }
