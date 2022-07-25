import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ProduccionComponent } from './pages/produccion/produccion.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TituloComponent } from './pages/titulo/titulo.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    TablaComponent,
    ProduccionComponent,
    AlmacenComponent,
    VentasComponent,
    DashboardComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PaginasRoutingModule,
    MaterialModule
  ]
})
export class PaginasModule { }
