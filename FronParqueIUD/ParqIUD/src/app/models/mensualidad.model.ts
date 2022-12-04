export class MensualidadModel {
    idMensualidad: number;
    valorPago: number;
    fechaInicio: Date;
    fechaFin: Date;
    idUsuario: number;

    constructor() {
        this.idMensualidad = 0;
        this.valorPago = 0;
        this.fechaInicio = new Date;
        this.fechaFin = new Date;
        this.idUsuario = 0;
    }
}