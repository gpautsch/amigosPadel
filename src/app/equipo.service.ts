import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Ger',
      espacialidad: 'casi nada',
      descripcion: 'gggggggggggggg'
    },
    {
      nombre: 'Dani',
      espacialidad: 'BBII',
      descripcion: 'dddddddddddddd'
    }
  ]


  constructor() {
    console.log('Funcionando Servicio')
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerUno(i: number){
    return this.equipo[i]
  }

}
