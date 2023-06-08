import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalActionFiguresComponent } from '../modal-action-figures/modal-action-figures.component';

@Component({
  selector: 'app-roupas-masculinas',
  templateUrl: './roupas-masculinas.component.html',
  styleUrls: ['./roupas-masculinas.component.scss']
})
export class RoupasMasculinasComponent implements OnInit {

  selectedItem: any;

  alternarIcone = false;    // Lista de propriedades de alternar entre icones de favoritos

  alterIcon(item:any) {
    item.alternarIcone = !item.alternarIcone;   // Lista de funções Click para alternar ícones separadamente
  }



  lista = [

    {
      src:'../../../assets/cm01.jpg',
      nome: 'Camiseta Kaido',
      preco:'79,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm02.jpg',
      nome: 'Camiseta Katakuri',
      preco:'79,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm03.jpg',
      nome: 'Camiseta Gear 4',
      preco:'69,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm04.jpg',
      nome: 'Camiseta Law',
      preco:'59,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm05.jpg',
      nome: 'Camiseta Shanks',
      preco:'79,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm06.jpg',
      nome: 'Camiseta Gear 5',
      preco:'49,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm07.jpg',
      nome: 'Camiseta Trio',
      preco:'99,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm08.jpg',
      nome: 'Camiseta Luffy',
      preco:'79,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm09.jpg',
      nome: 'Camiseta Teach',
      preco:'79,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm10.jpg',
      nome: 'Camiseta Lucy',
      preco:'89,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm11.jpg',
      nome: 'Camiseta Luffy',
      preco:'89,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/cm12.jpg',
      nome: 'Camiseta Luffy',
      preco:'59,90',
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
