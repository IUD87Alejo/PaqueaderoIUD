import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'fechaModificada'
})
export class FechaModificadaPipe implements PipeTransform {

  // private datePipe: DatePipe;
  constructor(private datePipe: DatePipe) { }

  transform(value: Date, ...args: unknown[]): string {
    // const fecha1 = (this.datePipe.transform(value, 'dd-MM-yyyy'));
    const fechab =  new Date('1753-01-01T12:00:00');
    // const fechac = new Date(value);
    let regreso;

    let fechaInicial;
    let fechaBase;

    fechaBase = this.datePipe.transform(fechab, 'yyyy');
    fechaInicial = this.datePipe.transform(value, 'yyyy');

    if (fechaInicial === '1900' || fechaInicial === '1753') {
      regreso = '';
    } else {
      regreso = this.datePipe.transform(value, 'dd MMM yyyy hh:mm:ss a');;
    }

    return regreso;
  }

}