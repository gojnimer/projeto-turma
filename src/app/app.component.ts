import { NavbarService } from './components/navbar.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  canShow = false;

  constructor(private navbar:NavbarService){}

  ngOnInit(){
    this.navbar.canShow.subscribe(x => {
      this.canShow = x;
    })

    
  }
}
