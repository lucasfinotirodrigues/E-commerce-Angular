import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mangas-novos',
  templateUrl: './mangas-novos.component.html',
  styleUrls: ['./mangas-novos.component.scss']
})
export class MangasNovosComponent implements OnInit {

  lista = [  
    {src:'../../../assets/manga01.jpg', volume: '1',conservacao:'Novo', preco:'99,90' },
    
    {src:'../../../assets/manga02.jpg', volume: '72',conservacao:'Novo', preco:'19,90' },
    
    {src:'../../../assets/manga03.jpg', volume: '89',conservacao:'Semi-Novo', preco:'13,90' },
        
    {src:'../../../assets/manga05.jpg', volume: '17',conservacao:'Novo', preco:'19,90' },
    
    {src:'../../../assets/manga04.jpg', volume: '97',conservacao:'Semi-Novo', preco:'13,90' },
    
    {src:'../../../assets/manga06.jpg', volume: '75',conservacao:'Novo', preco:'19,90' },
    
    {src:'../../../assets/manga07.jpg', volume: '51',conservacao:'Novo', preco:'19,90' },
    
    {src:'../../../assets/manga08.jpg', volume: '57',conservacao:'Novo', preco:'19,90' },
    
    {src:'../../../assets/manga09.jpg', volume: '54',conservacao:'Semi-Novo', preco:'13,90' },
    
    {src:'../../../assets/manga10.jpg', volume: '55',conservacao:'Novo', preco:'19,90' },
    
    {src:'../../../assets/manga11.jpg', volume: '96',conservacao:'Semi-Novo', preco:'13,90' },
    
    {src:'../../../assets/manga12.jpg', volume: '92',conservacao:'Novo', preco:'19,90' },
    
    {src:'../../../assets/manga13.jpg', volume: '94',conservacao:'Semi-Novo', preco:'13,90' },
    
    {src:'../../../assets/manga14.jpg', volume: '84',conservacao:'Novo', preco:'19,90' },
    
    {src:'../../../assets/manga15.jpg', volume: '100',conservacao:'Novo', preco:'49,90' },
    
    {src:'../../../assets/manga16.jpg', volume: '40',conservacao:'Semi-Novo', preco:'13,90' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
