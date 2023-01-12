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
    'id_det_productos',
    'fecha_registro',
    'cantidad',
    'producto',
    'encargado',
    'accion',
    'eliminar'
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  inventarioProd: InventarioProd = {}
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
id =0
idS = ''

  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioAlmacenComponent, {
      width: '400px',
      data: {},
    });



    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialogo cerrado');
      this.almacenFin = result
      if(this.almacenFin.id_producto == 20001 ){
        this.id = 50001
        this.idS = this.id.toString()
      }
      if(this.almacenFin.id_producto == 20002 ){
        this.id = 50002
        this.idS = this.id.toString()
      }
      if(this.almacenFin.id_producto == 20003 ){
        this.id = 50003
        this.idS = this.id.toString()
      }
      if(this.almacenFin.id_producto == 20004 ){
        this.id = 50004
        this.idS = this.id.toString()
      }
      if(this.almacenFin.id_producto == 10005 ){
        this.id = 50005
        this.idS = this.id.toString()
      }
      if(this.almacenFin.id_producto == 10006 ){
        this.id = 50006
        this.idS = this.id.toString()
      }
      if(this.almacenFin.id_producto == 10007 ){
        this.id = 50007
        this.idS = this.id.toString()
      }

      this.almacenFin.cantidad= this.almacenFin.cantidad

      this.inventarioProd= {tipo_prod: this.almacenFin.id_producto,fecha_vencimiento: this.almacenFin.fecha_vencimiento ,cantidad_actual:this.almacenFin.cantidad  }
      console.log(this.almacenFin);
      if(result){
      this.saveAlmacenFin();
      this.updateInv(this.idS, this.inventarioProd)

      console.log(this.almacenFin);
      if (result)
        this.saveAlmacenFin();
    }
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

    updateInv (id:string, update:InventarioProd ) {
    this.InventarioProdService.updateInventarioProd(id,update).subscribe(
      res=> {
        console.log(res)
      },
      err => console.log(err)
    )

  }

}

