import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioAlmacenComponent } from '../formulario-almacen/formulario-almacen.component';

import { AlmacenFinService } from '../../../../services/almacenfin.service';
import { AlmacenFin } from '../../../../models/AlmacenFin';
import { VentasComponent } from '../ventas.component'
/**
 * @title Table with sorting
 */

@Component({
  selector: 'app-tabla-almacen',
  templateUrl: './tabla-almacen.component.html',
  styleUrls: ['./tabla-almacen.component.css']
})
export class TablaAlmacenComponent implements OnInit {

  displayedColumns: string[] = [
    'id_det_productos',
    'fecha_vencimiento',
    'cantidad',
    'producto',
    'accion'
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  datos: any;
  dataSource: any;


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

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

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private almacenFinService: AlmacenFinService
  ) {
    this.almacenFinService.getAlmacenfin().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    })

  }

  appName: string = 'Tabla';
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaAlmacenFin")!)
    console.log("llego ", this.datos);
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioAlmacenComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

