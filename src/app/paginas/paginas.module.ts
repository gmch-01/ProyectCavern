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
import { FormularioKardexComponent } from './pages/kardex-insumos/formulario-kardex-insumos/formulario-kardex.component';
import { ListarKardexInsumosComponent } from './pages/kardex-insumos/tabla-kardex-insumos/listar-kardex-insumos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TablaUsuariosComponent } from './pages/usuarios/tabla-usuarios/tabla-usuarios.component';
import { FormularioUsuariosComponent } from './pages/usuarios/formulario-usuarios/formulario-usuarios.component';
import { TablaAlmacenComponent } from './pages/ventas/tabla-almacen/tabla-almacen.component';
import { FormularioAlmacenComponent } from './pages/ventas/formulario-almacen/formulario-almacen.component';
import { HojaProduccionComponent } from './pages/hoja-produccion/hoja-produccion.component';
import { TablaProduccionComponent } from './pages/produccion/tabla-produccion/tabla-produccion.component';
import { FormularioProduccionComponent } from './pages/produccion/formulario-produccion/formulario-produccion.component';
import { TablaHojaProduccionComponent } from './pages/hoja-produccion/tabla-hoja-produccion/tabla-hoja-produccion.component';
import { FormularioHojaProduccionComponent } from './pages/hoja-produccion/formulario-hoja-produccion/formulario-hoja-produccion.component';
import { ListarprodComponent } from './pages/productos/listarprod/listarprod.component';
import { RouterModule } from '@angular/router';
import { FormularioprodComponent } from './pages/productos/formularioprod/formularioprod.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { TablaRecetasComponent } from './pages/recetas/tabla-recetas/tabla-recetas.component';
import { FormularioRecetasComponent } from './pages/recetas/formulario-recetas/formulario-recetas.component';



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
    FormularioUsuariosComponent,
    TablaAlmacenComponent,
    FormularioAlmacenComponent,
    HojaProduccionComponent,
    TablaProduccionComponent,
    FormularioProduccionComponent,
    TablaHojaProduccionComponent,
    FormularioHojaProduccionComponent,
    ListarprodComponent,
    FormularioprodComponent,
    ListarprodComponent,
    RecetasComponent,
    TablaRecetasComponent,
    FormularioRecetasComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PaginasRoutingModule,
    MaterialModule
  ],

})
export class PaginasModule { }
