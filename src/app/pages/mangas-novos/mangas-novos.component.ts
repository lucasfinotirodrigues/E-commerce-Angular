import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalActionFiguresComponent } from '../modal-action-figures/modal-action-figures.component';

@Component({
  selector: 'app-mangas-novos',
  templateUrl: './mangas-novos.component.html',
  styleUrls: ['./mangas-novos.component.scss']
})
export class MangasNovosComponent implements OnInit {

  selectedItem: any;  // Item selecionado da lista


  alternarIcone = false;    // Lista de propriedades de alternar entre icones de favoritos

  alterIcon(item:any) {
    item.alternarIcone = !item.alternarIcone;   // Lista de funções Click para alternar ícones separadamente
  }

  lista = [

    {
      src:'../../../assets/manga01.jpg',
      volume: '1',
      conservacao:'Novo',
      preco:'99,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/manga02.jpg',
      volume: '72',
      conservacao:'Novo',
      preco:'19,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga03.jpg',
      volume: '89',
      conservacao:'Semi-Novo',
      preco:'13,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga05.jpg',
      volume: '17',
      conservacao:'Novo',
      preco:'19,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga04.jpg',
      volume: '97',
      conservacao:'Semi-Novo',
      preco:'13,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga06.jpg',
      volume: '75',
      conservacao:'Novo',
      preco:'19,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga07.jpg',
      volume: '51',
      conservacao:'Novo',
      preco:'19,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga08.jpg',
      volume: '57',
      conservacao:'Novo',
      preco:'19,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga09.jpg',
      volume: '54',
      conservacao:'Semi-Novo',
      preco:'13,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga10.jpg',
      volume: '55',
      conservacao:'Novo',
      preco:'19,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga11.jpg',
      volume: '96',
      conservacao:'Semi-Novo',
      preco:'13,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga12.jpg',
      volume: '92',
      conservacao:'Novo',
      preco:'19,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga13.jpg',
      volume: '94',
      conservacao:'Semi-Novo',
      preco:'13,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga14.jpg',
      volume: '84',
      conservacao:'Novo',
      preco:'19,90',
      alternarIcone: false
     },


    {
      src:'../../../assets/manga15.jpg',
      volume: '100',
      conservacao:'Novo',
      preco:'49,90',
      alternarIcone: false
     },

    {
      src:'../../../assets/manga16.jpg',
      volume: '40',
      conservacao:'Semi-Novo',
      preco:'13,90',
      alternarIcone: false
     },
  ]

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
