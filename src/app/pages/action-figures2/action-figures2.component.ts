import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalActionFiguresComponent } from '../modal-action-figures/modal-action-figures.component';

@Component({
  selector: 'app-action-figures2',
  templateUrl: './action-figures2.component.html',
  styleUrls: ['./action-figures2.component.scss']
})
export class ActionFigures2Component implements OnInit {

  selectedItem: any;  // Item selecionado da lista

  alternarIcone = false;    // Lista de propriedades de alternar entre icones de favoritos

  alterIcon(item:any) {
    item.alternarIcone = !item.alternarIcone;   // Lista de funções Click para alternar ícones separadamente
  }


  lista = [

    {
      src:'../../../assets/af06.jpg',
      nome: 'Gol D. Roger',
      tamanho:'23',
      preco:'317,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/af07.jpg',
      nome: 'Yamato',
      tamanho:'21',
      preco:'305,90'
    },

    {
      src:'../../../assets/af08.jpg',
      nome: 'Portgas D. Ace',
      tamanho:'20',
      preco:'246,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/af10.jpg',
      nome: 'Barba Branca',
      tamanho:'23',
      preco:'309,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/af11.jpg',
      nome: 'Marco a Fenix',
      tamanho:'22',
      preco:'299,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/af12.jpg',
      nome: 'Charlotte Katakuri',
      tamanho:'20',
      preco:'199,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/af13.jpg',
      nome: 'Doflamingo',
      tamanho:'25',
      preco:'199,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/af14.jpg',
      nome: 'Trafalgar D. Law',
      tamanho:'26',
      preco:'217,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/af27.jpg',
      nome: 'Kaido',
      tamanho:'24',
      preco:'317,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/af28.jpg',
      nome: 'Raleigh',
      tamanho:'22',
      preco:'308,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/af24.jpg',
      nome: 'Boa Hancock',
      tamanho:'18',
       preco:'197,90',
       alternarIcone: false
    },

    {
      src:'../../../assets/af21.jpg',
      nome: 'Bartolomeo',
      tamanho:'19',
      preco:'163,90',
      alternarIcone: false
    },

  ];

  constructor(public modalController: ModalController) {}

  // Modal

  async showModal(item:any) {
    this.selectedItem = item;
    const modal = await this.modalController.create({
      component: ModalActionFiguresComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        item: this.selectedItem
      }
    });
    return await modal.present();
  }

 // Função de sempre iniciar após o reload no topo da página
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
