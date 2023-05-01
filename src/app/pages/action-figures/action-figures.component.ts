import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalActionFiguresComponent } from '../modal-action-figures/modal-action-figures.component';

@Component({
  selector: 'app-action-figures',
  templateUrl: './action-figures.component.html',
  styleUrls: ['./action-figures.component.scss']
})
export class ActionFiguresComponent implements OnInit {


  selectedItem: any;  // Item selecionado da lista

  alternarIcone = false;    // Lista de propriedades de alternar entre icones de favoritos

  alterIcon(item:any) {
    item.alternarIcone = !item.alternarIcone;   // Lista de funções Click para alternar ícones separadamente
  }

  lista = [   //Lista de personagens para preencher pelos cards

    {
      src:'../../../assets/af03.jpg',
      nome: 'Monkey D. Luffy',
      tamanho:'21',
      preco:'189,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af01.jpg',
      nome: 'Roronoa Zoro',
      tamanho:'18',
      preco:'200,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af09.jpg',
      nome: 'Nami',
      tamanho:'18',
      preco:'289,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af20.jpg',
      nome: 'Usopp',
      tamanho:'22',
      preco:'395,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af15.jpg',
      nome: 'Vinsmoke Sanji',
      tamanho:'18',
      preco:'200,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af16.jpg',
      nome: 'Chopper',
      tamanho:'15',
      preco:'100,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af05.jpg',
      nome: 'Nico Robin',
      tamanho:'17',
      preco:'208,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af18.jpg',
      nome: 'Franky',
      tamanho:'26',
      preco:'173,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af17.jpg',
      nome: 'Brook',
      tamanho:'27',
      preco:'150,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af19.jpg',
      nome: 'Jinbe',
      tamanho:'21',
      preco:'246,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af02.jpg',
      nome: 'Shanks o ruivo',
      tamanho:'22',
      preco:'225,90',
      alternarIcone: false
    },
    {
      src:'../../../assets/af04.jpg',
      nome: 'Ace e Luffy',
      tamanho:'24',
      preco:'285,90',
      alternarIcone: false
    }

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

