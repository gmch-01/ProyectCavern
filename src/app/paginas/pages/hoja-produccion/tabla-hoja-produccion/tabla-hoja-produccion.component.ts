import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormularioHojaProduccionComponent } from '../formulario-hoja-produccion/formulario-hoja-produccion.component';
import { Usuario } from 'src/app/models/Usuario';
import { HojaProduccion } from '../../../../models/HojaProduccion';
import { HojaProduccionService } from 'src/app/services/hojaproduccion.service'

@Component({
  selector: 'app-tabla-hoja-produccion',
  templateUrl: './tabla-hoja-produccion.component.html',
  styleUrls: ['./tabla-hoja-produccion.component.css']
})
export class TablaHojaProduccionComponent implements OnInit {

  columnas: string[] = [
    'id_hoja_produccion',
    'id_receta',
    'cantidad',
    'fecha_hoja',
    'encargado',
    'accion',
    'eliminar'
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  datos: any;
  dataSource: any;

  hojaprodform: HojaProduccion = {
    id_hoja_produccion: 0,
    id_receta: 0,
    cantidad: 0,
    fecha_hoja: new Date('yyyy-MM-dd'),
    encargado: ''
  }
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private hojaprodService: HojaProduccionService
  ) {
    this.hojaprodService.getHojaProduccion().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    })
  }
  ngOnInit() {
    this.datos = JSON.parse(localStorage.getItem("listaHojaProd")!)
    console.log("llego ", this.datos);
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
      this.hojaprodform = result;
      console.log(this.hojaprodform);
      if (result) {
        this.saveHojaProduccion();
      }
    });
  }
  saveHojaProduccion() {
    this.hojaprodService.saveHojaProduccion(this.hojaprodform).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
    console.log(this.hojaprodform)
  }

  eliminarDialog(id: string): void {
    this.hojaprodService.deleteHojaProduccion(id).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

}
