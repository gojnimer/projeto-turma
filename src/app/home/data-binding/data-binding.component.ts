import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  data:any = 'teste'
  teste = "checkbox";
  ativo = false;
  formPessoa:FormGroup;

  ngOnInit(){

    this.formPessoa = this.fb.group({
      nome:['',[Validators.email,Validators.required]],
      sobrenome:['',[Validators.required]]
    })

  }

  onSubmit(){
    this.ativo = !this.ativo;
    console.log(this.formPessoa);
  }

 



}
