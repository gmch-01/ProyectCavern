import { OnInit, ViewChild, Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TituloComponent } from '../titulo/titulo.component';

export interface PeriodicElement {
  nombre: string;
  posicion: number;
  receta: string; 
  descripcion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { posicion: 1, nombre: 'Hydrogen', receta: '1.0079', descripcion: 'H' },
  { posicion: 2, nombre: 'Helium', receta: '4.0026', descripcion: 'He' },
  { posicion: 3, nombre: 'Lithium', receta: '6.941', descripcion: 'Li' },
  { posicion: 4, nombre: 'Beryllium', receta: '9.0122', descripcion: 'Be' },
  { posicion: 5, nombre: 'Boron', receta: '10.811', descripcion: 'B' },
  { posicion: 6, nombre: 'Carbon', receta: '12.0107', descripcion: 'C' },
  { posicion: 7, nombre: 'Nitrogen', receta: '14.0067', descripcion: 'N' },
  { posicion: 8, nombre: 'Oxygen', receta: '15.9994', descripcion: 'O' },
  { posicion: 9, nombre: 'Fluorine', receta: '18.9984', descripcion: 'F' },
  { posicion: 10, nombre: 'Neon', receta: '20.1797', descripcion: 'Ne' },
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})



export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['posicion', 'nombre', 'receta', 'descripcion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }
  appName: string = 'Tabla';
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
  }

}
