import { Component } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  usuarios?: Usuario[]

  constructor(private usuarioService: UsuarioService){
    
  }

  ngOnInit(): void{
    this.getUsuarios()
  }

  getUsuarios(): void{

    this.usuarioService.getUsuario().subscribe({
      next: res =>{
        console.log(res)
        this.usuarios = res
      }
    })
  }
}
