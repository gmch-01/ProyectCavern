import { OnInit, ViewChild, Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { FormularioComponent } from '../titulo/formulario/formulario.component';
import { MatDialog } from '@angular/material/dialog';




let codigo: string;
let name: string;
let nombre: string;
let id: number;
/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})


export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['posicion', 'nombre', 'receta', 'descripcion', 'accion'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  datos: Articulo[] = [];
  dataSource: any;

  codigo = '';
  name = '';
  nombre = '';
  id = '';
  receta = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }
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
    for (let x = 1; x <= 100; x++)
      this.datos.push(new Articulo(x, `artículo ${x}`, `receta ${x}`, Math.trunc(Math.random() * 1000)));

    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioComponent, {
      width: '400px',
      data: { name: this.codigo, animal: this.codigo },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codigo = result;
    });
  }

}

export class Articulo {
  constructor(public posicion: number, public nombre: string, public receta: string, public precio: number) {
  }
}
