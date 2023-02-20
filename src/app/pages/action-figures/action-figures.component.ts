import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-figures',
  templateUrl: './action-figures.component.html',
  styleUrls: ['./action-figures.component.scss']
})
export class ActionFiguresComponent implements OnInit {


  //Lista de personagens para preencher pelos cards


  lista = [
    
    {src:'../../../assets/af03.jpg', nome: 'Monkey D. Luffy',tamanho:'21', preco:'189,90' },

    {src:'../../../assets/af01.jpg', nome: 'Roronoa Zoro',tamanho:'18', preco:'200,90' },    
    
    {src:'../../../assets/af09.jpg', nome: 'Nami',tamanho:'18', preco:'289,90' },
    
    {src:'../../../assets/af20.jpg', nome: 'Usopp',tamanho:'22', preco:'395,90' },    
    
    {src:'../../../assets/af15.jpg', nome: 'Vinsmoke Sanji',tamanho:'18', preco:'200,90' },    
    
    {src:'../../../assets/af16.jpg', nome: 'Chopper',tamanho:'15', preco:'100,90' },    
    
    {src:'../../../assets/af05.jpg', nome: 'Nico Robin',tamanho:'17', preco:'208,90' },  

    {src:'../../../assets/af18.jpg', nome: 'Franky',tamanho:'26', preco:'173,90' },
    
    {src:'../../../assets/af17.jpg', nome: 'Brook',tamanho:'27', preco:'150,90' },
    
    {src:'../../../assets/af19.jpg', nome: 'Jimbei',tamanho:'21', preco:'246,90' },    

    {src:'../../../assets/af02.jpg', nome: 'Shanks o ruivo',tamanho:'22', preco:'225,90' },    

    {src:'../../../assets/af04.jpg', nome: 'Ace e Luffy',tamanho:'24', preco:'285,90' },
    
    {src:'../../../assets/af06.jpg', nome: 'Gol D. Roger',tamanho:'23', preco:'317,90' },    
    
    {src:'../../../assets/af07.jpg', nome: 'Yamato',tamanho:'21', preco:'305,90' },
    
    {src:'../../../assets/af08.jpg', nome: 'Portgas D. Ace',tamanho:'20', preco:'246,90' },
    
    {src:'../../../assets/af10.jpg', nome: 'Barba Branca',tamanho:'23', preco:'309,90' },
    
    {src:'../../../assets/af11.jpg', nome: 'Marco a Fenix',tamanho:'22', preco:'299,90' },
    
    {src:'../../../assets/af12.jpg', nome: 'Charlotte Katakuri',tamanho:'20', preco:'199,90' },
    
    {src:'../../../assets/af13.jpg', nome: 'Doflamingo',tamanho:'25', preco:'199,90' },
    
    {src:'../../../assets/af14.jpg', nome: 'Trafalgar D. Law',tamanho:'26', preco:'217,90' },
    
    {src:'../../../assets/af27.jpg', nome: 'Kaido',tamanho:'24', preco:'317,90' },
    
    {src:'../../../assets/af28.jpg', nome: 'Raleigh',tamanho:'22', preco:'308,90' },
    
    {src:'../../../assets/af24.jpg', nome: 'Boa Hancock',tamanho:'18', preco:'197,90' },
    
    {src:'../../../assets/af21.jpg', nome: 'Bartolomeo',tamanho:'19', preco:'163,90' },
    
    {src:'../../../assets/af22.jpg', nome: 'Enel',tamanho:'20', preco:'180,90' },
    
    {src:'../../../assets/af23.jpg', nome: 'Mihawk',tamanho:'22', preco:'300,90' },
    
    {src:'../../../assets/af25.jpg', nome: 'Crocodile',tamanho:'24', preco:'187,90' },
    
    {src:'../../../assets/af26.jpg', nome: 'Big Mom',tamanho:'21', preco:'301,90' },

    
    {src:'../../../assets/af29.jpg', nome: 'Barba Negra',tamanho:'24', preco:'191,90' },
    
    {src:'../../../assets/af30.jpg', nome: 'Kuma',tamanho:'23', preco:'249,90' },
    
    {src:'../../../assets/af32.jpg', nome: 'Eustass Kid',tamanho:'25', preco:'343,90' },
    
    {src:'../../../assets/af31.jpg', nome: 'Gekko Moria',tamanho:'20', preco:'211,90' },

    
    {src:'../../../assets/af34.jpg', nome: 'Rob Lucci',tamanho:'20', preco:'256,90' },
    
    {src:'../../../assets/af33.jpg', nome: 'Oden',tamanho:'20', preco:'118,90' },
    
    {src:'../../../assets/af35.jpg', nome: 'Buggy',tamanho:'28', preco:'123,90' },
    
    {src:'../../../assets/af36.jpg', nome: 'Sabo',tamanho:'26', preco:'308,90' },

  
    
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

