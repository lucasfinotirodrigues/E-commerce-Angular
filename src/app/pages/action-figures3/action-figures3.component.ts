import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-figures3',
  templateUrl: './action-figures3.component.html',
  styleUrls: ['./action-figures3.component.scss']
})
export class ActionFigures3Component implements OnInit {


  lista = [
    
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
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
