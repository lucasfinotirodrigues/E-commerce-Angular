import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-figures',
  templateUrl: './action-figures.component.html',
  styleUrls: ['./action-figures.component.scss']
})
export class ActionFiguresComponent implements OnInit {


  //Lista de personagens para preencher pelos cards


  lista = [
    
    {src:'../../../assets/af03.jpg', nome: 'Monkey D. Luffy',tamanho:'21', preco:'189,90', default:'../../../assets/heart.svg',},

    {src:'../../../assets/af01.jpg', nome: 'Roronoa Zoro',tamanho:'18', preco:'200,90', default:'../../../assets/heart.svg'}, 
    
    {src:'../../../assets/af09.jpg', nome: 'Nami',tamanho:'18', preco:'289,90',        default:'../../../assets/heart.svg'},
    
    {src:'../../../assets/af20.jpg', nome: 'Usopp',tamanho:'22', preco:'395,90' ,          default:'../../../assets/heart.svg'},   
    
    {src:'../../../assets/af15.jpg', nome: 'Vinsmoke Sanji',tamanho:'18', preco:'200,90',          default:'../../../assets/heart.svg'},    
    
    {src:'../../../assets/af16.jpg', nome: 'Chopper',tamanho:'15', preco:'100,90',          default:'../../../assets/heart.svg'},    
    
    {src:'../../../assets/af05.jpg', nome: 'Nico Robin',tamanho:'17', preco:'208,90',          default:'../../../assets/heart.svg'},  

    {src:'../../../assets/af18.jpg', nome: 'Franky',tamanho:'26', preco:'173,90',          default:'../../../assets/heart.svg'},
    
    {src:'../../../assets/af17.jpg', nome: 'Brook',tamanho:'27', preco:'150,90',          default:'../../../assets/heart.svg'},
    
    {src:'../../../assets/af19.jpg', nome: 'Jimbei',tamanho:'21', preco:'246,90',          default:'../../../assets/heart.svg'},   

    {src:'../../../assets/af02.jpg', nome: 'Shanks o ruivo',tamanho:'22', preco:'225,90',          default:'../../../assets/heart.svg'},    

    {src:'../../../assets/af04.jpg', nome: 'Ace e Luffy',tamanho:'24', preco:'285,90',          default:'../../../assets/heart.svg'},

  
  ];

  alterIcon(index: number) {
    // Altere apenas um item do card usando a indexação do array
    this.lista[index].default = '../../../assets/heart.png';
  }

  constructor() {
  
   }

   alteracaoIcone = true;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

