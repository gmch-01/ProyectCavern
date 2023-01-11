
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';


import { InsumosService } from '../../../../services/insumos.service';
import { FormularioInsumosComponent } from '../formulario-insumos/formulario-insumos.component';
import { Insumo } from 'src/app/models/Insumo';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent {

  columnas: string[] = [
    'id_insumo',
    'nombre',
    'unidad',
    'accion',
    'eliminar'
  ];

  datos: any
  appName: string = 'Tabla';

  insumoform: Insumo = {
    id_insumo: 0,
    nombre: '',
    unidad: ''
  }
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private insumoService: InsumosService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,) {
    this.insumoService.getInsumo().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    })

  }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInsumo")!)
    console.log("refrecar ", this.datos);

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
      data: {}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialogo cerrado');
      this.insumoform = result
      console.log(this.insumoform);
      if (result)
        this.saveInsumo();
    });
  }
  editarDialog(id: string): void {
    console.log(id);
    let dialogRef = this.dialog.open(FormularioInsumosComponent, {
      width: '400px',
      data: this.datos == id
    });
  }
  eliminarDialog(id: string): void {
    this.insumoService.deleteInsumo(id).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }



  saveInsumo() {
    this.insumoService.saveInsumo(this.insumoform).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )


    console.log(this.insumoform)
  }

}
