import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.scss']
})
export class QuadrosComponent implements OnInit {

  
  lista = [

    {src:'../../../assets/qd01.jpg', nome: 'Quadro Gear 4',preco:'109,90' },
    
    {src:'../../../assets/qd02.jpg', nome: 'Quadro Luffy',preco:'179,90' },

    {src:'../../../assets/qd03.jpg', nome: 'Quadro Shirohige',preco:'69,90' },

    {src:'../../../assets/qd04.jpg', nome: 'Camiseta Brook',preco:'59,90' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
