import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-figures2',
  templateUrl: './action-figures2.component.html',
  styleUrls: ['./action-figures2.component.scss']
})
export class ActionFigures2Component implements OnInit {


  lista = [
  

    
    {src:'../../../assets/af06.jpg', nome: 'Gol D. Roger',tamanho:'23', preco:'317,90', default:'../../../assets/heart.svg', },    
    
    {src:'../../../assets/af07.jpg', nome: 'Yamato',tamanho:'21', preco:'305,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af08.jpg', nome: 'Portgas D. Ace',tamanho:'20', preco:'246,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af10.jpg', nome: 'Barba Branca',tamanho:'23', preco:'309,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af11.jpg', nome: 'Marco a Fenix',tamanho:'22', preco:'299,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af12.jpg', nome: 'Charlotte Katakuri',tamanho:'20', preco:'199,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af13.jpg', nome: 'Doflamingo',tamanho:'25', preco:'199,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af14.jpg', nome: 'Trafalgar D. Law',tamanho:'26', preco:'217,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af27.jpg', nome: 'Kaido',tamanho:'24', preco:'317,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af28.jpg', nome: 'Raleigh',tamanho:'22', preco:'308,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af24.jpg', nome: 'Boa Hancock',tamanho:'18', preco:'197,90', default:'../../../assets/heart.svg', },  
    
    {src:'../../../assets/af21.jpg', nome: 'Bartolomeo',tamanho:'19', preco:'163,90', default:'../../../assets/heart.svg', },  

  ];

  
  alterIcon(index: number) {
    // Altere apenas um item do card usando a indexação do array
    this.lista[index].default = '../../../assets/heart.png';
  }

  constructor() {
  
   }

   alteracaoIcone = true;
   
  ngOnInit(): void {
  }

}
