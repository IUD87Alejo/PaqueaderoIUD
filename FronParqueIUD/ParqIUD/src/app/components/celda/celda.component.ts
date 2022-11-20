import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CeldaModel } from '../../models/celda.model';
import { CeldaService } from '../../services/celda.service';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {

  celda = new CeldaModel();
  accion = '';

  constructor( private celdaService: CeldaService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || '0';

    if(id !== '0') {
      this.celdaService.getCelda( id )
      .subscribe( (resp: CeldaModel) => {
        this.celda = resp;
        console.log(resp);
        this.accion = 'Editar';
      });
    }else{
      console.log('nuevo');
      this.accion = 'Nueva';
    }
  }

  guardar( form: NgForm ) {
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
        if(this.celda.idCelda === 0){
          this.celdaService.crearCelda(this.celda).subscribe(
            (resp: any) => {
              if(resp.error) {
                Swal.fire('Error al crear el Registro','Se presentó un error al crear el registro', 'error');
              } else {
                this.router.navigateByUrl('/celdas');
              }
            }
          );
        } else {
          this.celdaService.actualizarCelda(this.celda).subscribe(
            (resp: any) => {
              if(resp.error){
                Swal.fire('Error al actualizar el Registro','Se presentó un error al actualizar el registro', 'error');
              } else {
                this.router.navigateByUrl('/celdas');
              }
            });
        }
      }
      
    });
    
  }

}
