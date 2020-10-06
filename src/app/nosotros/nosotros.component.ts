import { Component, OnInit } from '@angular/core';
//IMPORTO EL SERVICIO PARA PODER UTILIZARLO
import { EquipoService } from './../equipo.service'

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  //DEFINO ARRAY VACIO
  equipo:any[]=[];

  constructor(private _servicio: EquipoService) { 
    // CONSUMO SERVICIO DEFINIDO y METODO ASOCIADO
    this.equipo = _servicio.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
