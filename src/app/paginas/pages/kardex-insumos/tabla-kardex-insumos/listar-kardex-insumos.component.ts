import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from '../../insumos/insumo';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormularioKardexComponent } from '../formulario-kardex-insumos/formulario-kardex.component';

import { AlmacenInsService } from '../../../../services/almacenins.service';
import { AlmacenIns } from '../../../../models/AlmacenIns';

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
    fecha_entrada: new Date(),
    proveedor: '',
    cantidad: 0,
    id_insumo: 0,
    peso: 0,
    usuario: '',
  }

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private almacenInsService: AlmacenInsService
  ) {
    this.almacenInsService.getAlmacenIns().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    })
  }

  /*openDialog(): void {
    let dialogRef = this.dialog.open(FormularioKardexComponent, {
      width: '400px',
      data: new Insumo(0, '', '', ''),
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) this.agregar(result);
    });
  }
  agregar(result: Insumo) {
    this.datos.push(
      new Insumo(
        result.codigo,
        result.nombre,
        result.receta,
        result.descripcion
      )
    );
    this.tabla1.renderRows();
  }*/
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


  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioKardexComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialogo cerrado');
      this.almacenIns = result;
      console.log(this.almacenIns);
      this.saveAlmacenIns();
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


}
