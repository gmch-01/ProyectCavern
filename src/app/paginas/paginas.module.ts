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
import { FormularioComponent } from './pages/titulo/formulario/formulario.component';



import { BarrasComponent } from './pages/dashboard/graficas/barras/barras.component';
import { DonaComponent } from './pages/dashboard/graficas/dona/dona.component';
import { LineasComponent } from './pages/dashboard/graficas/lineas/lineas.component';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ListarComponent } from './pages/insumos/listar/listar.component';
import { FormularioInsumosComponent } from './pages/insumos/formulario-insumos/formulario-insumos.component';
import { KardexInsumosComponent } from './pages/kardex-insumos/kardex-insumos.component';
import { FormularioKardexComponent } from './pages/kardex-insumos/formulario-kardex/formulario-kardex.component';
import { ListarKardexInsumosComponent } from './pages/kardex-insumos/listar-kardex-insumos/listar-kardex-insumos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TablaUsuariosComponent } from './pages/usuarios/tabla-usuarios/tabla-usuarios.component';
import { FormularioUsuariosComponent } from './pages/usuarios/formulario-usuarios/formulario-usuarios.component';



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
    TituloComponent,
    FormularioComponent,
    BarrasComponent,
    DonaComponent,
    LineasComponent,
    InsumosComponent,
    ProductosComponent,
    ListarComponent,
    FormularioInsumosComponent,
    KardexInsumosComponent,
    FormularioKardexComponent,
    ListarKardexInsumosComponent,
    UsuariosComponent,
    TablaUsuariosComponent,
    FormularioUsuariosComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PaginasRoutingModule,
    MaterialModule,

  ],

})
export class PaginasModule { }
