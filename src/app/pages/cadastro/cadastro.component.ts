import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  MostrarSenha = false

  MostraressaSenha = false


  visibilidadeSenha(){
    this.MostrarSenha = !this.MostrarSenha
  }
  
  visibilidadedaSenha(){
    this.MostraressaSenha = !this.MostraressaSenha
  }
}

