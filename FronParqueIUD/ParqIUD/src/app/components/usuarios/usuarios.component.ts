import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  regs: UsuarioModel[] = [];
  title = 'Usuarios';
  cargando = false;

  constructor( private usuarioService:UsuarioService,
               public common: CommonService ) { }

  ngOnInit(): void {
    console.log('Ingreso a Usuarios');
    this.cargando = true;

    this.usuarioService.getUsuarios()
    .subscribe( resp => {
      console.log(resp);
      this.regs = resp;
      this.cargando = false;
    })
  }

  deleteUsuario( usuario: UsuarioModel, i: number ){
    console.log('Eliminar registro')
  }

}
