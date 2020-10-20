import { HomeRoutingModule } from './home-routing.module';
import { NavbarService } from './../components/navbar.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[MainComponent],
  providers: [NavbarService],
  
})
export class HomeModule { }
