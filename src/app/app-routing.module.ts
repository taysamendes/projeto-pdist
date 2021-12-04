import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent},
  {
    path:'home', component:HomeComponent},
  {
    path:'curriculos', component: CurriculosComponent
  },
  {
    path:'cadastro', component: CadastroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
