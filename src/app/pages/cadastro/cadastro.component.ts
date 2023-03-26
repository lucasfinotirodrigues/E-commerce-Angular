import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalTermosComponent } from '../modal-termos/modal-termos.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {


  constructor(public modalController: ModalController) {}

  //Função abrir modal

  async showModal() {
    const modal = await this.modalController.create({
      component: ModalTermosComponent,
      cssClass: 'modal-termos'
    });
    return await modal.present();
  }

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
  stylelink = {
    'text-transform':'initial'
  }
  
}

