import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from './../equipo.service'

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo:any[] = [];

  constructor(
    private ruta:ActivatedRoute,
    //AHORA DENTRO DE ESTA CLASE SE PUEDEN UTILIZAR LOS SERVICIOS DE Equipo
    private _services:EquipoService
  ) {
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.equipo = this._services.obtenerUno(params['id'])
    })
   }

  ngOnInit(): void {
  }

}
