import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { HomeComponent } from './pages/home/home.component';
import { AlmacenComponent } from './pages/almacen/almacen.component';
import { ProduccionComponent } from './pages/produccion/produccion.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'almacen', component: AlmacenComponent },
      { path: 'produccion', component: ProduccionComponent },
      { path: 'ventas', component: VentasComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: TablaComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaginasRoutingModule { }
