export class AccesoVehiculoModel {
    idAcceso: number;
    fechaIngreso: Date;
    fechaSalida: Date;
    idVehiculo: number;
    idCelda: number;

    constructor() {
        this.idAcceso = 0;
        this.fechaIngreso = new Date;
        this.fechaSalida = new Date;
        this.idVehiculo = 0;
        this.idCelda = 0;
    }
}