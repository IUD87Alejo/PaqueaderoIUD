import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

import { AccesoVehiculoModel } from '../../models/accesoVehiculos.model';
import { AccesoVehiculoService } from '../../services/acceso-vehiculo.service';
import { VehiculoModel } from '../../models/vehiculo.model';
import { VehiculoService } from '../../services/vehiculo.service';
import { CeldaModel } from '../../models/celda.model';
import { CeldaService } from '../../services/celda.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-acceso-vehiculo',
  templateUrl: './acceso-vehiculo.component.html',
  styleUrls: ['./acceso-vehiculo.component.css'],
  providers: [DatePipe]
})
export class AccesoVehiculoComponent implements OnInit {

  acceso = new AccesoVehiculoModel();
  vehiculo = new VehiculoModel();
  marca = '';
  modelo = '';
  usuarios: any[] = [];
  celdas: any[] = [];
  accion = '';
  bloq = false;

  constructor( private accesoVehiculoService:AccesoVehiculoService,
               private vehiculoService:VehiculoService,
               private celdaService: CeldaService,
               private route: ActivatedRoute,
               private router: Router,
               private datePipe: DatePipe ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || '0';

    if(id !== '0') {
      this.accesoVehiculoService.getAcceso( id )
      .subscribe( (resp: AccesoVehiculoModel) => {
        this.acceso = resp;
        //const fecha1 = (this.datePipe.transform('0001-01-01T00:00:00', 'yyyy-MM-dd 00:00:00'));
        const fecha1 = new Date('0001-01-01T00:00:00');
        if(this.acceso.fechaSalida === fecha1)
        {
          this.acceso.fechaSalida = new Date();
        }
        console.log('acceso',resp);
        this.accion = 'Salida';
        this.searchVehiculoId(this.acceso.idVehiculo);
        this.bloq = true;
      });
    }else{
      console.log('nuevo');
      this.accion = 'Ingreso';
    }

    // List Celdas
    this.celdaService.getCeldas().subscribe(
      (resp: any) =>{
        this.celdas = resp;
        this.celdas.unshift({
          idCelda: 0,
        });
        console.log(this.celdas);
      }
    );
  }

  searchVehiculo(event: any) {
    if(event)
    {
      const placa = event.target.value;
      this.vehiculoService.getVehiculoPlaca( placa )
      .subscribe( (resp: VehiculoModel) => {
        this.vehiculo = resp;
        this.marca = resp.marca;
        this.modelo = resp.modelo;
        this.acceso.idVehiculo = resp.idVehiculo;
        this.vehiculo.placa = resp.placa;
        console.log(resp);
      });
    }
  }

  searchVehiculoId(id: number) {
    if(id !== 0)
    {
      this.vehiculoService.getVehiculo( String(id) )
      .subscribe( (resp: VehiculoModel) => {
        this.marca = resp.marca;
        this.modelo = resp.modelo;
        console.log(resp);
      });
      
    }
  }

  SendDataonChange(event: any) {
    console.log('Fecha',event.target.value);
  }

  guardar( form: NgForm ){
    console.log('Proceso de salvado');
    console.log('Modelo',this.acceso);

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
        this.acceso.idCelda = Number(this.acceso.idCelda);
        this.acceso.idAcceso = Number(this.acceso.idAcceso);
        this.acceso.idVehiculo = Number(this.acceso.idVehiculo);
        //if(this.acceso.fechaSalida )
        if(this.acceso.idAcceso === 0){
          this.accesoVehiculoService.crearAcceso(this.acceso).subscribe(
            (resp: any) => {
              if(resp.error) {
                Swal.fire('Error al crear el Registro','Se presentó un error al crear el registro', 'error');
              } else {
                this.router.navigateByUrl('/accesos');
              }
            }
          );
        } else {
          this.accesoVehiculoService.actualizarAcceso(this.acceso).subscribe(
            (resp: any) => {
              if(resp.error){
                Swal.fire('Error al actualizar el Registro','Se presentó un error al actualizar el registro', 'error');
              } else {
                this.router.navigateByUrl('/accesos');
              }
            });
        }
      }
      
    });
  }

}
