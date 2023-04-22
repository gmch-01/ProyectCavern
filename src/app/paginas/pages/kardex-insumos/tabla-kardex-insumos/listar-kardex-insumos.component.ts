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

  almacenIns: AlmacenIns = {

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
    private InventarioInsService: InventarioInsService, 
    private InsumosService : InsumosService
  ) {
    this.almacenInsService.getAlmacenIns().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    })
    this.InsumosService.getInsumo().subscribe(x => {
      this.datosI = this.datosI;
      console.log(this.datosI)
    })
  }


  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaAlmacenIns")!)

    console.log("llego ", this.datos);

    this.datosI = JSON.parse(localStorage.getItem("listaInsumo")!)

    console.log("llegaron los insumos ", this.datosI);
    
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
      console.log(result, "ESTO ES LO QUE LLEGA");
      this.almacenIns= result; 
      
      if(result){
      this.saveAlmacenIns();
      Swal.fire('Registro Guardado')
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
