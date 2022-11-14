import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { VehiculoModel } from '../../models/vehiculo.model';
import { VehiculoService } from '../../services/vehiculo.service';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculo = new VehiculoModel();
  Usuarios: any[] = [];
  usuarioName = '';
  accion = '';

  constructor( private vehiculoService: VehiculoService,
               private usuarioService: UsuarioService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || '0';
    console.log('id', id);

    if(id !== '0') {
      this.vehiculoService.getVehiculo( id )
      .subscribe( (resp: VehiculoModel) => {
        this.vehiculo = resp;
        console.log(resp);
        this.accion = 'Editar';
      });
    }else{
      console.log('nuevo');
      this.accion = 'Nuevo';
    }

    // List Users
    this.usuarioService.getUsuarios().subscribe(
      (resp: any) =>{
        this.Usuarios = resp;
        this.Usuarios.unshift({
          idUsuario: 0,
          nombre1: 'Seleccione una',
          apellido1: 'opción'
        });
        console.log(this.Usuarios);
      }
    );
  }

  searchUsuario(event: any){
    if(event)
    {
      const idUsuario = event.target.value;
      this.usuarioService.getUsuario( idUsuario )
      .subscribe( (resp: UsuarioModel) => {
        this.usuarioName = resp.nombre1 + ' ' + resp.apellido1;
        console.log(resp);
      });
    }
  }

  guardar( form: NgForm ) {
    console.log('Proceso de salvado');
    console.log(this.vehiculo);

    this.vehiculoService.getVehiculoPlaca(this.vehiculo.placa).subscribe(
      (respb: boolean) => {
        if(respb && this.vehiculo.idVehiculo === 0){
          Swal.fire(
            {
              title: 'Error',
              text: 'La placa ingresada ya pertenece a otro vehículo',
              icon: 'error'
            }
          );
          return;
        }else{
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
              this.vehiculo.idUsuario = Number(this.vehiculo.idUsuario);
              if(this.vehiculo.idVehiculo === 0){
                this.vehiculoService.crearVehiculo(this.vehiculo).subscribe(
                  (resp: any) => {
                    if(resp.error) {
                      Swal.fire('Error al crear el Registro','Se presentó un error al crear el registro', 'error');
                    } else {
                      this.router.navigateByUrl('/vehiculos');
                    }
                  }
                );
              } else {
                this.vehiculoService.actualizarVehiculo(this.vehiculo).subscribe(
                  (resp: any) => {
                    if(resp.error){
                      Swal.fire('Error al actualizar el Registro','Se presentó un error al actualizar el registro', 'error');
                    } else {
                      this.router.navigateByUrl('/vehiculos');
                    }
                  });
              }
            }
            
          });
        }
      }
    );
    
  }

}
