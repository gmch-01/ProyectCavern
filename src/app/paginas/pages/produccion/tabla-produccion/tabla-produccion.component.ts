import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormularioProduccionComponent } from '../formulario-produccion/formulario-produccion.component';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-tabla-produccion',
  templateUrl: './tabla-produccion.component.html',
  styleUrls: ['./tabla-produccion.component.css']
})
export class TablaProduccionComponent implements OnInit {
  displayedColumns: string[] = [
    'id_produccion',
    'id_hoja_prod',
    'fecha_prod',
    'encargado',
    'descripcion',
    'accion',
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  datos: Usuario[] = [];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginatSor!: MatPaginator;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    /* private usuarioService: UsuariosService */
  ) {
   /*  this.usuarioService.getUsuarios().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    }) */
  }
  ngOnInit() {

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
    let dialogRef = this.dialog.open(FormularioProduccionComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
