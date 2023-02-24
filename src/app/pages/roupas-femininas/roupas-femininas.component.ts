import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupas-femininas',
  templateUrl: './roupas-femininas.component.html',
  styleUrls: ['./roupas-femininas.component.scss']
})
export class RoupasFemininasComponent implements OnInit {

  constructor() { }

  lista = [

    {src:'../../../assets/cf01.jpg', nome: 'Camiseta Wanted',preco:'39,90' },
    
    {src:'../../../assets/cf02.jpg', nome: 'Kit Rei Dos Piratas',preco:'89,90' },
    
    {src:'../../../assets/cf03.jpg', nome: 'Cacmiseta Luffy',preco:'59,90' },
    
    {src:'../../../assets/cf04.jpg', nome: 'Camiseta Wanted',preco:'49,90' },

    
    {src:'../../../assets/cf05.jpg', nome: 'Camiseta Bando',preco: '39,90' },
    
    {src:'../../../assets/cf07.jpg', nome: 'Camiseta Bandeira',preco:'39,90' },
    
    {src:'../../../assets/cf08.jpg', nome: 'Camiseta Bando',preco:'49,90' },   
    
    {src:'../../../assets/cf10.jpg', nome: 'Camiseta Luffy',preco:'69,90' },

    
    {src:'../../../assets/cf11.jpg', nome: 'Camiseta Bando',preco:'39,90' },
    
    {src:'../../../assets/cf12.jpg', nome: 'Camiseta Luffy',preco:'39,90' },
    
    {src:'../../../assets/cf13.jpg', nome: 'Camiseta Luffy',preco:'59,90' },
    
    {src:'../../../assets/cf14.jpg', nome: 'Camiseta Luffy',preco:'39,90' },


  ]
  ngOnInit(): void {
  }

}
