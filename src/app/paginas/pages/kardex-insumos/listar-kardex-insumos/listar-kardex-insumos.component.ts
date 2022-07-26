import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from '../../insumos/insumo';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormularioKardexComponent } from '../formulario-kardex/formulario-kardex.component';

@Component({
  selector: 'app-listar-kardex-insumos',
  templateUrl: './listar-kardex-insumos.component.html',
  styleUrls: ['./listar-kardex-insumos.component.css']
})
export class ListarKardexInsumosComponent implements OnInit {

  columnas: string[] = ['posicion', 'nombre', 'receta', 'descripcion', 'accion'];

  datos: Insumo[] = [];
  dataSource: any;

  ds = new MatTableDataSource<Insumo>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Insumo>;


  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }
  appName: string = 'Tabla';
  @ViewChild(MatSort) sort!: MatSort;

  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioKardexComponent, {
      width: '400px',
      data: new Insumo(0, '', '', '')
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined)
        this.agregar(result);
    });
  }
  agregar(result: Insumo) {
    this.datos.push(new Insumo(result.codigo, result.nombre, result.receta, result.descripcion));
    this.tabla1.renderRows()
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
      data: this.datos

    })

  }

  ngOnInit(): void {
  }

}
