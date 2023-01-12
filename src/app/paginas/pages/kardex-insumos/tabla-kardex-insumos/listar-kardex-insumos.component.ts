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

@Component({
  selector: 'app-listar-kardex-insumos',
  templateUrl: './listar-kardex-insumos.component.html',
  styleUrls: ['./listar-kardex-insumos.component.css'],
})
export class ListarKardexInsumosComponent implements OnInit {
  columnas: string[] = [
    'id_det_insumo',
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
  dataSource: any;

  almacenIns: AlmacenIns = {
    id_det_insumo: 0,
    fecha_entrada: '',
    proveedor: '',
    cantidad: 0,
    id_insumo: 0,
    peso: 0,
    usuario: '',
  }
  inventarioIns: InventarioIns = {}

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private almacenInsService: AlmacenInsService,
    private InventarioInsService: InventarioInsService
  ) {
    this.almacenInsService.getAlmacenIns().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    })
  }


  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaAlmacenIns")!)
    console.log("llego ", this.datos);
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
      console.log('Dialogo cerrado');
      this.almacenIns = result;
      if(this.almacenIns.id_insumo == 10001 ){
        this.id = 60001
        this.idS = this.id.toString()
      }
      if(this.almacenIns.id_insumo == 10002 ){
        this.id = 60002
        this.idS = this.id.toString()
      }
      if(this.almacenIns.id_insumo == 10003 ){
        this.id = 60003
        this.idS = this.id.toString()
      }
      if(this.almacenIns.id_insumo == 10004 ){
        this.id = 60004
        this.idS = this.id.toString()
      }
      if(this.almacenIns.id_insumo == 10005 ){
        this.id = 60005
        this.idS = this.id.toString()
      }
      if(this.almacenIns.id_insumo == 10006 ){
        this.id = 60006
        this.idS = this.id.toString()
      }
      if(this.almacenIns.id_insumo == 10007 ){
        this.id = 60007
        this.idS = this.id.toString()
      }


      this.almacenIns.cantidad= this.almacenIns.cantidad
      this.inventarioIns= {tipo_insumo: this.almacenIns.id_insumo, fecha_venc: this.almacenIns.fecha_vencimiento ,cantidad_actual:this.almacenIns.cantidad }
      console.log(this.almacenIns);
      if(result){
      this.saveAlmacenIns();
      this.updateInv(this.idS, this.inventarioIns)
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
    this.almacenInsService.saveAlmacenIns(this.almacenIns).
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


}
