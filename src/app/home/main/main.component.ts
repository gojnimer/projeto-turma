import { NavbarService } from './../../components/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private navbar:NavbarService) { }

  data = new Date();
  currency = 1250.30;
  ngOnInit(): void {
  }

  mostrarNav(){
    this.navbar.canShow.next(!this.navbar.canShow.value);
  }

}
