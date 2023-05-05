import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from '../../insumos/insumo';
import { InventarioInsService } from '../../../../services/inventarioins.service';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormularioKardexComponent } from '../formulario-kardex-insumos/formulario-kardex.component';

import { AlmacenInsService } from '../../../../services/almacenins.service';
import { AlmacenIns } from '../../../../models/AlmacenIns';
import { InventarioIns } from '../../../../models/InventarioIns';
import { InsumosService } from 'src/app/services/insumos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar-kardex-insumos',
  templateUrl: './listar-kardex-insumos.component.html',
  styleUrls: ['./listar-kardex-insumos.component.css'],
})
export class ListarKardexInsumosComponent implements OnInit {
  columnas: string[] = [
    'fecha_entrada',
    'proveedor',
    'cantidad',
    'insumo',
    'peso',
    'usuario',
    'accion',
    'eliminar'
  ];

  datos: any;
  datosI: any;
  datosX: any;  
  dataSource: any;
  guardarIns!: InventarioIns
  almacenIns: any
  almacenInsF: AlmacenIns= {}
  inventarioIns: InventarioIns = {}

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private almacenInsService: AlmacenInsService,
    private InventarioInsService: InventarioInsService, 
    private InsumosService : InsumosService
  ) {
    // this.almacenInsService.getAlmacenIns().subscribe(x => {
    //   this.datos = this.datos;
    //   console.log(this.datos, "ESTE ES EL DE PRUEBA")
    // })
    // this.InsumosService.getInsumo().subscribe(x => {
    //   this.datosI = this.datosI;
    //   console.log(this.datosI)
    // })
  }

  datosFiltrados: any;
  filtro= '';

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaAlmacenIns")!)
    this.datos =Object.values(this.datos)
    console.log("llego ", this.datos);
    this.datosFiltrados= this.datos
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  editarDialog(): void {
    let dialogRef = this.dialog.open(FormularioKardexComponent, {
      width: '400px',
      data: this.datos,
    });
  }

id =0
idS = ''
  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioKardexComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.almacenIns= result; 
      this.almacenInsF = {fecha_entrada: this.almacenIns.fecha_entrada, proveedor: this.almacenIns.proveedor, cantidad: this.almacenIns.cantidad, id_insumo: this.almacenIns.id_insumo, fecha_vencimiento: this.almacenIns.fecha_vencimiento, usuario: this.almacenIns.usuario}
      console.log(this.almacenIns, "ESTO ES EL NUEVO LOTE ? ")
      if(result){
      this.saveAlmacenIns();
      Swal.fire('Registro Guardado')
      this.guardarIns = {tipo_insumo: this.almacenIns.id_insumo, fecha_venc: this.almacenIns.fecha_vencimiento, cantidad_actual: this.almacenIns.cantidad, lote: this.almacenIns.lote }
      this.saveInvIns()
      //this.updateInv(this.idS, this.inventarioIns)
      
    }
    });
  }
  eliminarAlmacenins(id: string): void {
    this.almacenInsService.deleteAlmacenIns(id).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

  saveAlmacenIns() {
    this.almacenInsService.saveAlmacenIns(this.almacenInsF).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  saveInvIns() {
    this.InventarioInsService.saveInventarioIns(this.guardarIns).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )


    console.log(this.almacenIns)
  }

  updateInv (id:string, update:InventarioIns ) {
    this.InventarioInsService.updateInventarioIns(id,update).subscribe(
      res=> {
        console.log(res)
      },
      err => console.log(err)
    )

  }

  filtrarTabla(): void {
    const filtro = this.filtro.trim().toLowerCase();
    if (filtro !== '') {
      this.datosFiltrados = this.datos.filter((d:any) => {
        for (const prop in d) {
          if (d.hasOwnProperty(prop) && !isNaN(d[prop])) {
            if (d[prop].toString().toLowerCase().includes(filtro)) {
              return true;
            }
          } else if (d.hasOwnProperty(prop)) {
            if (d[prop].toString().toLowerCase().includes(filtro)) {
              return true;
            }
          }
        }
        return false;
      });
    } else {
      this.datosFiltrados = this.datos;
    }
  }


}
