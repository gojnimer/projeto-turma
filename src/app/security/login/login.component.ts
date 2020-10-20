import { NavbarService } from './../../components/navbar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private navbar:NavbarService) { }

  loginForm:FormGroup = this.fb.group({
    email: ["",[Validators.email,Validators.required]],
    senha: ["",[Validators.required,Validators.minLength(5)]]
  });

  ngOnInit(): void {

  }

  onSubmit(){
    const {email,senha} = this.loginForm.value;
    if(this.loginForm.valid){
      if(email == "gojnimer@gmail.com" && senha == "123456"){
        localStorage.setItem('token','autenticado');
        this.navbar.canShow.next(true);
        this.router.navigate(['']);
        return;
      }
      alert('Usuário não encontrado')
      return;
    }
    alert('por favor preencha todos os campos');
    
  }
  


}
