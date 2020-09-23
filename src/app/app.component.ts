import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Amigos del Padel';
  //show:boolean = true; // DESCOMENTAR PARA QUE FUNCIONE PARA ej1 y ej 2
  // LA LINEA DE ABAJO ES SOLO PARA MOSTRAR FUNCIONAM
  // cursos:string[]=['HTML', 'ANGULAR', 'PHP'];
  // AQUI SE CREA UNA LISTA DE TIPO OBJETO (any)
  animales:Array<any> = [
    {tipo:'Perro', nombre:'Aira', edad:7},
    {tipo:'Gato', nombre:'Moana', edad:4},
    {tipo:'Perro', nombre:'Uma', edad:6}
  ]
}
