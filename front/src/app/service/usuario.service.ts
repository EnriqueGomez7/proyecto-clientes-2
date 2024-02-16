import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private BASE_URL:string = "http://localhost:8080/api"

  private httpHeader: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.BASE_URL + "/usuario")
  }

  guardarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.BASE_URL+ "/usuario", usuario, {headers:this.httpHeader})
  }

}
