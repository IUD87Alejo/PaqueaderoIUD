export class UsuarioModel {
    idUsuario: number;
    documento: string;
    nombre1: string;
    nombre2: string;
    apellido1: string;
    apellido2: string;
    celular: string;
    direccion: string;
    estado: string;
    
    constructor() {
        this.idUsuario = 0;
        this.documento = '';
        this.nombre1 = '';
        this.nombre2 = '';
        this.apellido1 = '';
        this.apellido2 = '';
        this.celular = '';
        this.direccion = '';
        this.estado = '';
    }
}