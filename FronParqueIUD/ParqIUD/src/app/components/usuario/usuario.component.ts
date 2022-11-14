import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario = new UsuarioModel();
  accion = '';

  constructor( private usuarioService: UsuarioService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || '0';
    console.log('id', id);

    if(id !== '0') {
      this.usuarioService.getUsuario( id )
      .subscribe( (resp: UsuarioModel) => {
        this.usuario = resp;
        console.log(resp);
        this.accion = 'Editar';
      });
    }else{
      console.log('nuevo');
      this.accion = 'Nuevo';
    }
  }

  guardar( form: NgForm ) {
    console.log('Proceso de salvado');

    if (form.invalid){
      Object.values(form.controls).forEach ( ctrl => {
        ctrl.markAsTouched();
      });
      Swal.fire(
        {
          title: 'Error',
          text: 'Hacen falta campos obligatorios',
          icon: 'error'
        }
      );
      return;
    }

    Swal.fire(
      {
        title: 'Confirmar Guardar !!!',
        text: '¿Está seguro de guardar el registro actual?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Guardar'
      }
    ).then((result) => {
      if(result.isConfirmed) {
        this.usuario.idUsuario = Number(this.usuario.idUsuario);
        if(this.usuario.idUsuario === 0){
          this.usuarioService.crearUsuario(this.usuario).subscribe(
            (resp: any) => {
              if(resp.error) {
                Swal.fire('Error al crear el Registro','Se presentó un error al crear el registro', 'error');
              } else {
                this.router.navigateByUrl('/usuarios');
              }
            }
          );
        } else {
          this.usuarioService.actualizarUsuario(this.usuario).subscribe(
            (resp: any) => {
              if(resp.error){
                Swal.fire('Error al actualizar el Registro','Se presentó un error al actualizar el registro', 'error');
              } else {
                this.router.navigateByUrl('/usuarios');
              }
            });
        }
      }
      
    });
  }

}
