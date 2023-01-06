import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioAlmacenComponent } from '../formulario-almacen/formulario-almacen.component';

let codigo: string;
let name: string;
let nombre: string;
let id: number;
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
    'fecha_registro',
    'cantidad',
    'producto',
    'encargado'
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  datos: Articulo[] = [];
  dataSource: any;

  codigo = '';
  name = '';
  nombre = '';
  id = '';
  apellido = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}
  
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

  ngOnInit(): void {
   /*  for (let x = 1; x <= 100; x++)
      this.datos.push(
        new Articulo(
          x,
          `usuario ${x}`,
          `apellido ${x}`,
        
          Math.trunc(Math.random() * 1000)
        
        )
      ); */

    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioAlmacenComponent, {
      width: '400px',
      data: { name: this.codigo, animal: this.codigo },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.codigo = result;
    });
  }
}

export class Articulo {
  constructor(
    public id_det_productos: number,
    public feha_registro: string,
    public cantidad: number,
    public producto: string,
    public encargado:string,
 
  ) {}
}
