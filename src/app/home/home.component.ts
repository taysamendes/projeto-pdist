import { Component, OnInit } from '@angular/core';
import { Dicas } from './Dicas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dicas: Dicas[] = [
    {
      id: 1,
      titulo: 'Cuidado com informações pessoais',
      imagem: 'https://i.imgur.com/iBVBNu5.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis mi, hendrerit quis arcu a, aliquet ultrices urna.',

    },
    {
      id: 2,
      titulo: 'Mantenha seus contatos atualizados',
      imagem: 'https://i.imgur.com/jq5WNAW.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis mi, hendrerit quis arcu a, aliquet ultrices urna.'
    },
    {
      id: 3,
      titulo: 'Verifique os erros ortográficos',
      imagem: 'https://i.imgur.com/xZvVOmw.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis mi, hendrerit quis arcu a, aliquet ultrices urna.'
    },
    {
      id: 4,
      titulo: 'Especifique sua área de atuação',
      imagem: 'https://i.imgur.com/3oEjMZC.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis mi, hendrerit quis arcu a, aliquet ultrices urna.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
