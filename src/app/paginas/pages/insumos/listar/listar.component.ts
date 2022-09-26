import { Component, OnInit, ViewChild } from '@angular/core';

import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';
import { Insumo } from '../insumo';
import { FormularioInsumosComponent } from '../formulario-insumos/formulario-insumos.component';
import { AgregarComponent } from '../../agregar/agregar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  columnas: string[] = ['posicion', 'nombre', 'receta', 'descripcion', 'accion'];
  
  datos: Insumo[] = [];
  dataSource: any;
  
  ds = new MatTableDataSource<Insumo>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Insumo>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }
  appName: string = 'Tabla';
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioInsumosComponent, {
      width: '400px',
      data: new Insumo (0,'', '', '')
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined )
      this.agregar(result);
    });
  }

  agregar (result: Insumo) {
    this.datos.push(new Insumo (result.codigo, result.nombre, result.receta, result.descripcion));
    this.tabla1.renderRows()
  }
  

  ngOnInit(): void {
  }

}
