import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Curriculo } from '../curriculos/curriculo.model';
import { CurriculoService } from '../shared/services/curriculo.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public curriculoForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public curriculoService: CurriculoService,
  ) { }

  ngOnInit(): void {
    this.createForm(new Curriculo());
  }

  createForm(curriculo: Curriculo) {
    this.curriculoForm = this.fb.group({
      nome: [curriculo.nome,Validators.required],
      email: [curriculo.email,Validators.required],
      cidade: [curriculo.cidade,Validators.required],
      formacao: [curriculo.formacao,Validators.required],
      experiencia: [curriculo.experiencia],
      conhecimento: [curriculo.conhecimento],
      linkedin: [curriculo.linkedin,Validators.required],
      github: [curriculo.gitHub,Validators.required],
      telefone: [curriculo.telefone,Validators.required],
      curso: [curriculo.curso,Validators.required],
      idioma: [curriculo.idioma],
      atividades: [curriculo.atividadesExtras]

    })
  }


  cadastrar(): void {
    this.curriculoService.cadastrarCurriculo(this.curriculoForm.value).subscribe(result => {
    })
    this.createForm(new Curriculo)
  }

}
