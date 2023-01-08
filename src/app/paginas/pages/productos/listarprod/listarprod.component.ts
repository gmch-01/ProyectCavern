import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';

import { ProductosService } from '../../../../services/productos.service';
import { FormularioprodComponent } from '../formularioprod/formularioprod.component'

@Component({
  selector: 'app-listarprod',
  templateUrl: './listarprod.component.html',
  styleUrls: ['./listarprod.component.css']
})
export class ListarprodComponent implements OnInit {

  columnas: string[] = [
    'id_producto',
    'nombre',
    'descripcion',
    'accion'
  ];

  datos: any
  appName: string = 'Tabla';
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productoService: ProductosService, private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog) {
    this.productoService.getProducto().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    })

  }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaProducto")!)
    console.log("llego ", this.datos);
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioprodComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialogo cerrado')
    });
  }
  editarDialog(): void {
    let dialogRef = this.dialog.open(FormularioprodComponent, {
      width: '400px',
      data: this.datos,
    });
  }

}
