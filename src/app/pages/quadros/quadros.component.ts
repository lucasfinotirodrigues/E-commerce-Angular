import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.scss']
})
export class QuadrosComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
