import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
//import { AuthGuard } from './guards/auth.guard';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AccesoVehiculosComponent } from './components/acceso-vehiculos/acceso-vehiculos.component';
import { AccesoVehiculoComponent } from './components/acceso-vehiculo/acceso-vehiculo.component';
import { CeldasComponent } from './components/celdas/celdas.component';
import { CeldaComponent } from './components/celda/celda.component';
import { NotasComponent } from './components/notas/notas.component';
import { NotaComponent } from './components/nota/nota.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'vehiculo/:id', component: VehiculoComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'accesos', component: AccesoVehiculosComponent },
  { path: 'acceso/:id', component: AccesoVehiculoComponent },
  { path: 'celdas', component: CeldasComponent },
  { path: 'celda/:id', component: CeldaComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'nota/:id', component: NotaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( ROUTES, {useHash: true } )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
