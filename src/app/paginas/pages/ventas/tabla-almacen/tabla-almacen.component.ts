import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioAlmacenComponent } from '../formulario-almacen/formulario-almacen.component';

import { AlmacenFinService } from '../../../../services/almacenfin.service';
import { AlmacenFin } from '../../../../models/AlmacenFin';
import { VentasComponent } from '../ventas.component';
import { InventarioProd } from '../../../../models/InventarioProd';
import { InventarioProdService } from '../../../../services/inventarioprod.service';
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
    'fecha_registro',
    'cantidad',
    'producto',
    'encargado',
    'fecha_vencimiento',
    'accion',
    'eliminar'
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  inventarioProd: InventarioProd = {}
  datos: any;
  dataSource: any;
  datacompleto!: InventarioProd

  almacenFin: AlmacenFin = {
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
    private almacenFinService: AlmacenFinService,
    private InventarioProdService: InventarioProdService
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
  id = 0
  idS = ''

  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioAlmacenComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialogo cerrado');
      this.almacenFin = result
      if (result) {
        this.saveAlmacenFin();
        this.datacompleto = { tipo_prod: this.almacenFin.id_producto, fecha_vencimiento: this.almacenFin.fecha_vencimiento, cantidad_actual: this.almacenFin.cantidad }
        this.saveInvProd();
      }
    });
  }


  saveInvProd() {
    this.InventarioProdService.saveInventarioProd(this.datacompleto).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )


    console.log(this.almacenFin)
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

  updateInv(id: string, update: InventarioProd) {
    this.InventarioProdService.updateInventarioProd(id, update).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )

  }

}

