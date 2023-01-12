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

  columnas: string[] = [
    'id_det_productos',
    'fecha_registro',
    'cantidad',
    'producto',
    'encargado',
    'accion',
    'eliminar'
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  datos: any;
  dataSource: any;

  almacenFin: AlmacenFin = {
    id_det_producto: 0,
    fecha_registro: '',
    cantidad: 0,
    id_producto: 0,
    encargado: ''
  }
  @ViewChild(MatSort) sort!: MatSort;

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
      console.log('Dialogo cerrado');
      this.almacenFin = result
      console.log(this.almacenFin);
      if (result)
        this.saveAlmacenFin();
    });
  }
  saveAlmacenFin() {
    this.almacenFinService.saveAlmacenfin(this.almacenFin).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )


    console.log(this.almacenFin)
  }
  eliminarDialog(id: string): void {
    this.almacenFinService.deleteAlmacenfin(id).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

}

