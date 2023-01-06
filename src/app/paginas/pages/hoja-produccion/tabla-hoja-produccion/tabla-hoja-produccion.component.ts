import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormularioHojaProduccionComponent } from '../formulario-hoja-produccion/formulario-hoja-produccion.component';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-tabla-hoja-produccion',
  templateUrl: './tabla-hoja-produccion.component.html',
  styleUrls: ['./tabla-hoja-produccion.component.css']
})
export class TablaHojaProduccionComponent implements OnInit {

  displayedColumns: string[] = [
    'id_hoja_prod',
    'id_receta',
    'cantidad',
    'fecha_hoja',
    'encargado',
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
    let dialogRef = this.dialog.open(FormularioHojaProduccionComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
