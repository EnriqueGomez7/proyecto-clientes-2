import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  form: FormGroup

  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellidoUno: '',
    apellidoDos: '',
    correo: ''
  }

  constructor(private usuarioService: UsuarioService, private formBuilder:FormBuilder){
    this.form = this.formBuilder.group({
      nombre: '', apellidoUno: '', apellidoDos: '', correo: ''
    })
  }

  getData(){
    this.usuario.nombre = this.form.get('nombre')?.value
    this.usuario.apellidoUno = this.form.get('apellidoUno')?.value
    this.usuario.apellidoDos = this.form.get('apellidoDos')?.value
    this.usuario.correo = this.form.get('correo')?.value;

    this.usuarioService.guardarUsuario(this.usuario).subscribe({
      next: res =>{
        console.log(res)
      },
      error : err =>{
        console.log(err)
      }
    })
  }
}
