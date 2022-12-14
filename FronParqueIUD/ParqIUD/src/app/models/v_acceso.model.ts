export class VistaAccesosModel {
    idAcceso: number;
    placa: string;
    marca: string;
    maodelo: string;
    nombre: string;
    fechaIngreso: Date;
    fechaSalida: Date;
    idCelda: number;
    idNota: number;
    nota: string;

    constructor() {
        this.idAcceso = 0;
        this.placa = '';
        this.marca = '';
        this.maodelo = '';
        this.nombre = '';    
        this.fechaIngreso = new Date;
        this.fechaSalida = new Date;
        this.idCelda = 0;
        this.idNota = 0;
        this.nota = '';
    }
}