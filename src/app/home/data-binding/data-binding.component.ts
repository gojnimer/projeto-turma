import { PokemonService } from './../pokemon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor(private fb:FormBuilder,private pkmnAPI:PokemonService) { }

  data:any = 'teste'
  teste = "checkbox";
  ativo = false;
  formPessoa:FormGroup;

  listarClientes:any[] = [
    {nome:'teste',sobrenome:'cliente'},
    {nome:'teste1',sobrenome:'cliente'}

  ]

  pokemons:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  mostrarNome(a,index){
    alert(a);
    this.listarClientes.splice(index,1);
  }

  ngOnInit(){
    this.pokemons.subscribe(x => console.log(x));
  
    let resposta:any = {nome:'teste',sobrenome:'testando'};
    this.pkmnAPI.getPokemons().pipe(retry(5)).subscribe(
      (success:any) => {this.pokemons.next(success.results)},
      (error:any) => console.log(error),
      () => {console.log('complete')}
    )

    /* this.formPessoa = resposta.map(x => {
      return {
        nome:[x.nome,[Validators.email,Validators.required]],
        sobrenome:[x.sobrenome,[Validators.required]]
      }
    }) */

    this.formPessoa = this.fb.group({
      nome:[resposta.nome || '',[Validators.email,Validators.required]],
      sobrenome:[resposta.sobrenome || '',[Validators.required]]
    })

  }

  onSubmit(){
    this.ativo = !this.ativo;
    console.log(this.formPessoa);
  }

 



}
