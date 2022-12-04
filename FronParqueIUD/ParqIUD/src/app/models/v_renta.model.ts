export class VistaRentasModel {
    idMensualidad: number;
    fechaInicio: Date;
    fechaFin: Date;
    idUsuario: number;
    nombre: string;

    constructor() {
        this.idMensualidad = 0;
        this.fechaInicio = new Date;
        this.fechaFin = new Date;
        this.idUsuario = 0;
        this.nombre = '';
    }
}