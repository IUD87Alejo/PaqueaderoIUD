import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CommonService } from './services/common.service';
import { VehiculoService } from './services/vehiculo.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioService } from './services/usuario.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AccesoVehiculoComponent } from './components/acceso-vehiculo/acceso-vehiculo.component';
import { AccesoVehiculosComponent } from './components/acceso-vehiculos/acceso-vehiculos.component';
import { FechaModificadaPipe } from './components/pipes/fecha-modificada.pipe';
import { YesNoPipe } from './components/pipes/yes-no.pipe';
import { DatePipe } from '@angular/common';
import { CeldasComponent } from './components/celdas/celdas.component';
import { CeldaComponent } from './components/celda/celda.component';
import { NotasComponent } from './components/notas/notas.component';
import { NotaComponent } from './components/nota/nota.component';
import { MensualidadesComponent } from './components/mensualidades/mensualidades.component';
import { MensualidadComponent } from './components/mensualidad/mensualidad.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    VehiculoComponent,
    HomeComponent,
    NavbarComponent,
    UsuarioComponent,
    UsuariosComponent,
    AccesoVehiculoComponent,
    AccesoVehiculosComponent,
    FechaModificadaPipe,
    CeldasComponent,
    CeldaComponent,
    YesNoPipe,
    NotasComponent,
    NotaComponent,
    MensualidadesComponent,
    MensualidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CommonService,
    VehiculoService,
    UsuarioService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
