import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../shared/services/curriculo.service';
import { Curriculo } from './curriculo.model';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css']
})
export class CurriculosComponent implements OnInit {

  curriculos!: Curriculo[]

  constructor(
    private curriculoService: CurriculoService
  ) { }

  ngOnInit(): void {
    this.listarCurriculos()
  }

  listarCurriculos(){
   this.curriculoService.listarCurriculos().subscribe(data =>{
     this.curriculos = data
     console.log(data)
   })
  }

  deletar(id:number){
    this.curriculoService.deletarCurriculo(id).subscribe(dado =>{
      console.log(dado.nome)
    });
  }

}
