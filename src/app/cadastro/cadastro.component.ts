import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Curriculo } from '../curriculos/curriculo.model';
import { CurriculoService } from '../shared/services/curriculo.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
