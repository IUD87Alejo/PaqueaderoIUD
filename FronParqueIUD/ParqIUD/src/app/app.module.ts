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
import { DatePipe } from '@angular/common';

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
    FechaModificadaPipe
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
