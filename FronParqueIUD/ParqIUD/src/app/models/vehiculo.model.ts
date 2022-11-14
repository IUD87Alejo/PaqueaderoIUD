export class VehiculoModel {
    idVehiculo: number;
    placa: string;
    marca: string;
    modelo: string;
    idUsuario: number;
    estado: boolean;
    
    constructor() {
        this.idVehiculo = 0;
        this.placa = '';
        this.marca = '';
        this.modelo = '';
        this.idUsuario = 0;
        this.estado = false;
    }
}