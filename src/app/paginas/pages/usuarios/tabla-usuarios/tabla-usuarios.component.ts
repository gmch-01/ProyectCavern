import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioComponent } from '../../titulo/formulario/formulario.component';
import { FormularioUsuariosComponent } from '../formulario-usuarios/formulario-usuarios.component';

import { UsuariosComponent } from '../usuarios.component'
import { Usuario } from '../../../../models/Usuario';
import { UsuariosService } from '../../../../services/usuarios.service';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css'],
})
export class TablaUsuariosComponent implements OnInit {
  displayedColumns: string[] = [
    'posicion',
    'nombre',
    'apellido',
    'direccion',
    'numero_cell',
    'nombreuser',
    'accion',
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  /* datos: UsuariosComponent [] = []; */
  datos: any;
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginatSor!: MatPaginator;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private usuarioService: UsuariosService
  ) {
    this.usuarioService.getUsuarios().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    })
  }
  ngOnInit() {
    this.datos = JSON.parse(localStorage.getItem("listaUser")!)
    console.log("llego ", this.datos);
  }

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
    let dialogRef = this.dialog.open(FormularioUsuariosComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
