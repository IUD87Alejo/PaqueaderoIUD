import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AccesoVehiculoModel } from '../../models/accesoVehiculos.model';
import { VehiculoModel } from '../../models/vehiculo.model';
import { AccesoVehiculoService } from '../../services/acceso-vehiculo.service';
import { UsuarioService } from '../../services/usuario.service';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-acceso-vehiculo',
  templateUrl: './acceso-vehiculo.component.html',
  styleUrls: ['./acceso-vehiculo.component.css']
})
export class AccesoVehiculoComponent implements OnInit {

  acceso = new AccesoVehiculoModel();
  vehiculo = new VehiculoModel();
  marca = '';
  modelo = '';
  usuarios: any[] = [];
  accion = '';
  bloq = false;

  constructor( private accesoVehiculoService:AccesoVehiculoService,
               private vehiculoService:VehiculoService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || '0';

    if(id !== '0') {
      this.accesoVehiculoService.getAcceso( id )
      .subscribe( (resp: AccesoVehiculoModel) => {
        this.acceso = resp;
        console.log(resp);
        this.accion = 'Salida';
        this.searchVehiculoId(this.acceso.idVehiculo);
        this.bloq = true;
      });
    }else{
      console.log('nuevo');
      this.accion = 'Ingreso';
    }
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

  guardar( form: NgForm ){

  }

}
