import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalActionFiguresComponent } from '../modal-action-figures/modal-action-figures.component';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.scss']
})
export class QuadrosComponent implements OnInit {

  selectedItem : any;

  alternarIcone = false;    // Lista de propriedades de alternar entre icones de favoritos

  alterIcon(item:any) {
    item.alternarIcone = !item.alternarIcone;   // Lista de funções Click para alternar ícones separadamente
  }

  lista = [

    {
      src:'../../../assets/qd01.jpg',
      nome: 'Quadro Gear 4',
      preco:'109,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/qd02.jpg',
      nome: 'Quadro Luffy',
      preco:'179,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/qd03.jpg',
      nome: 'Quadro Shirohige',
      preco:'69,90',
      alternarIcone: false
    },

    {
      src:'../../../assets/qd04.jpg',
      nome: 'Quadro Brook',
      preco:'59,90',
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
