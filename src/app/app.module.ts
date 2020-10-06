import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

//SERVICIOS. TAMBIEN SE DEBE AGREGAR EN providers: [] AL FINAL DE ESTE MISMO ARCHIVO
import { EquipoService } from './equipo.service'

//LUEGO ESTA CONSTANTE SE UTILIZA EN EL IMPORT
const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', component: InicioComponent, pathMatch: 'full'},
  //{ path: '**', redirectTo: '/', pathMatch: 'full'}
  //PODRIAMOS HACER LO DE ARRIBA, O BIEN AL COMOPONENTE nosotros PARA QUE NOS CONTACTE
  // SOLO BASTA CON CAMBIAR LA / POR EL NOMBRE DEL COMPONENTE
  { path: '**', redirectTo: 'nosotros', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    FooterComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
