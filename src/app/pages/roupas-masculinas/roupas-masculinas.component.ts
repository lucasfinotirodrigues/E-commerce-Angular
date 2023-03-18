import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupas-masculinas',
  templateUrl: './roupas-masculinas.component.html',
  styleUrls: ['./roupas-masculinas.component.scss']
})
export class RoupasMasculinasComponent implements OnInit {

  constructor() { }


  lista = [

    {src:'../../../assets/cm01.jpg', nome: 'Camiseta Kaido',preco:'79,90' },
    
    {src:'../../../assets/cm02.jpg', nome: 'Camiseta Katakuri',preco:'79,90' },

    {src:'../../../assets/cm03.jpg', nome: 'Camiseta Gear 4',preco:'69,90' },

    {src:'../../../assets/cm04.jpg', nome: 'Camiseta Law',preco:'59,90' },

    {src:'../../../assets/cm05.jpg', nome: 'Camiseta Shanks',preco:'79,90' },

    {src:'../../../assets/cm06.jpg', nome: 'Camiseta Gear 5',preco:'49,90' },
    
    {src:'../../../assets/cm07.jpg', nome: 'Camiseta Trio',preco:'99,90' },
    
    {src:'../../../assets/cm08.jpg', nome: 'Camiseta Luffy',preco:'79,90' },
    
    {src:'../../../assets/cm09.jpg', nome: 'Camiseta Teach',preco:'79,90' },
    
    {src:'../../../assets/cm10.jpg', nome: 'Camiseta Lucy',preco:'89,90' },
    
    {src:'../../../assets/cm11.jpg', nome: 'Camiseta Luffy',preco:'89,90' },
    
    {src:'../../../assets/cm12.jpg', nome: 'Camiseta Mugiwara',preco:'59,90' },

  ]
  ngOnInit(): void {
  }

}
