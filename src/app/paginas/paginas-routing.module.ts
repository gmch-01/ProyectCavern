import { NgModule, Component } from '@angular/core';
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
import { InsumosComponent } from './pages/insumos/insumos.component';
import { KardexInsumosComponent } from './pages/kardex-insumos/kardex-insumos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HojaProduccionComponent } from './pages/hoja-produccion/hoja-produccion.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { InventarioInsComponent } from './pages/inventario-ins/inventario-ins.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'almacen', component: AlmacenComponent },
      { path: 'produccion', component: ProduccionComponent },
      { path: 'hoja-produccion', component: HojaProduccionComponent },
      { path: 'ventas', component: VentasComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'insumos', component: InsumosComponent },
      { path: 'kardex-insumos', component: KardexInsumosComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'recetas', component: RecetasComponent },
      /*  { path: ':id', component: TablaComponent }, */
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'productos', component: ProductosComponent },
      {path: 'inventarioins', component: InventarioInsComponent},
      { path: '**', redirectTo: 'listado' }
    ]
  }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ]
})
export class PaginasRoutingModule { }
