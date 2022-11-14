import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { VehiculoModel } from '../models/vehiculo.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: UsuarioModel = new UsuarioModel();

  constructor( private http: HttpClient,
               private commond: CommonService ) { }

  getUsuario( id:string ): Observable<any> {
    console.log( this.http.get(`${ this.commond.getUrl() }/Usuario/${ id }`) );
    return this.http.get(`${ this.commond.getUrl() }/Usuario/${ id }`);
  }

  getUsuarios() {
    return this.http.get(`${ this.commond.getUrl() }/Usuario`)
    .pipe(
      map ( this.crearArreglo )
    );
  }

  crearUsuario( usuario: UsuarioModel ) {
    console.log('Creación de Usuario');
    console.log(this.http.post(`${ this.commond.getUrl() }/Usuario`, usuario)); // muestra el resultado de la consulta especifica
    return this.http.post(`${ this.commond.getUrl() }/Usuario`, usuario);
  }

  actualizarUsuario ( usuario: UsuarioModel ) {
    console.log('usuario a guardar',usuario);
    console.log(this.http.put(`${ this.commond.getUrl() }/Usuario/${ usuario.idUsuario }`, usuario)); // muestra el resultado de la consulta especifica
    return this.http.put(`${ this.commond.getUrl() }/Usuario/${ usuario.idUsuario }`, usuario);
  }

  //Modulos de apoyo
  private crearArreglo( usaurioObj: object ) {

    const usuarios: UsuarioModel[] = [];

    if (usaurioObj === null ) { return []; }

    Object.keys ( usaurioObj ).forEach ( key => {
      const usuario: UsuarioModel = usaurioObj [key];
      usuarios.push( usuario );
    });

    return usuarios;
  }
}
