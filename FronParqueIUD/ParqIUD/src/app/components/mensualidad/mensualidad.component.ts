import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

import { MensualidadModel } from '../../models/mensualidad.model';
import { MensualidadService } from '../../services/mensualidad.service';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-mensualidad',
  templateUrl: './mensualidad.component.html',
  styleUrls: ['./mensualidad.component.css'],
  providers: [DatePipe]
})
export class MensualidadComponent implements OnInit {

  mensualidad = new MensualidadModel();
  usuarios: any[] = [];
  accion = '';

  constructor( private mensualidadService: MensualidadService,
               private usuarioService: UsuarioService,
               private route: ActivatedRoute,
               private router: Router,
               private datePipe: DatePipe ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || '0';

    if(id !== '0') {
      this.mensualidadService.getMensualidad( id )
      .subscribe( (resp: MensualidadModel) => {
        this.mensualidad = resp;
        //const fecha1 = (this.datePipe.transform('0001-01-01T00:00:00', 'yyyy-MM-dd 00:00:00'));
        // const fecha1 = new Date('0001-01-01T00:00:00');
        // if(this.acceso.fechaSalida === fecha1)
        // {
        //   this.acceso.fechaSalida = new Date();
        // }
        console.log('acceso',resp);
        this.accion = 'Editar';
        // this.searchVehiculoId(this.acceso.idVehiculo);
        // this.bloq = true;
      });
    }else{
      console.log('nuevo');
      const fecha1 = new Date;
      this.mensualidad.fechaInicio = new Date();
      fecha1.setDate(fecha1.getDay() + 30);
      this.mensualidad.fechaFin = fecha1;
      console.log('Mensualidad',this.mensualidad)
      this.accion = 'Nueva';
    }

    // List Celdas
    this.usuarioService.getUsuarios().subscribe(
      (resp: any) =>{
        this.usuarios = resp;
        this.usuarios.unshift({
          idUsuario: 0,
          nombre1: 'Seleccione un ',
          apellido1: 'usuario'
        });
        console.log(this.usuarios);
      }
    );
  }

  guardar( form: NgForm ){
    console.log('Proceso de salvado');
    console.log('Modelo',this.mensualidad);

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
        this.mensualidad.idMensualidad = Number(this.mensualidad.idMensualidad);
        this.mensualidad.idUsuario = Number(this.mensualidad.idUsuario);
        //if(this.acceso.fechaSalida )
        if(this.mensualidad.idMensualidad === 0){
          this.mensualidadService.creaMensualidad(this.mensualidad).subscribe(
            (resp: any) => {
              if(resp.error) {
                Swal.fire('Error al crear el Registro','Se presentó un error al crear el registro', 'error');
              } else {
                this.router.navigateByUrl('/mensualidades');
              }
            }
          );
        } else {
          this.mensualidadService.actualizarMensualidad(this.mensualidad).subscribe(
            (resp: any) => {
              if(resp.error){
                Swal.fire('Error al actualizar el Registro','Se presentó un error al actualizar el registro', 'error');
              } else {
                this.router.navigateByUrl('/mensualidades');
              }
            });
        }
      }
      
    });
  }

}
