import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Curriculo } from 'src/app/curriculos/curriculo.model';


@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  url = 'http://new-django.herokuapp.com/students'
  urlDel = 'http://new-django.herokuapp.com/student'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  public listarCurriculos(): Observable<Curriculo[]> {
    return this.httpClient.get<Curriculo[]>(this.url)
  }

  public cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.httpClient.post<Curriculo>(this.url, curriculo, this.httpOptions)
  }

  public deletarCurriculo(id: number):Observable<Curriculo>{
    return this.httpClient.delete<Curriculo>(`${this.urlDel}/${id}`)
  }
}
