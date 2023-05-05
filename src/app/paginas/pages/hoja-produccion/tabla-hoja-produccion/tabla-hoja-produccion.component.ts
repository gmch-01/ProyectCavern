import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormularioHojaProduccionComponent } from '../formulario-hoja-produccion/formulario-hoja-produccion.component';
import { Usuario } from 'src/app/models/Usuario';
import { HojaProduccion } from '../../../../models/HojaProduccion';
import { HojaProduccionService } from 'src/app/services/hojaproduccion.service';
import { FormularioeditComponent } from '../formularioedit/formularioedit.component';
import Swal from 'sweetalert2'

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
    'peso_recibido',
    'embolsado',
    'accion',
    'eliminar'
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  datos: any;
  dataSource: any;
  datosFiltrados: any;
  filtro= '';

  hojaprodform: HojaProduccion = {
    id_receta: 0,
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
    this.datos =Object.values(this.datos)
    console.log("llego ", this.datos);
    this.datosFiltrados= this.datos
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
        Swal.fire('Registro Guardado')
      }
    });
  }

  openEdit(id: number, edit: HojaProduccion, receta: string){
    let recetaInt
    if (receta == "Pan molde"){
      receta="50001"
      recetaInt=parseInt(receta)
    }
    if(receta == "Sarnita"){
      receta= "50008"
      recetaInt=parseInt(receta)
    }

    if(receta == "Hamburguesa"){
      receta = "50014"
      recetaInt=parseInt(receta)
    }
    let dialogRef = this.dialog.open(FormularioeditComponent, {
      width: '400px',
      data: {id_hoja_produccion: id, id_receta: recetaInt,  cantidad: edit.cantidad, fecha_hoja: edit.fecha_hoja, encargado:edit.encargado, progreso: edit.progreso, peso_recibido: edit.peso_recibido, embolsado: edit.embolsado },
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
  
  filtrarTabla(): void {
    const filtro = this.filtro.trim().toLowerCase();
    if (filtro !== '') {
      this.datosFiltrados = this.datos.filter((d:any) => {
        for (const prop in d) {
          if (d.hasOwnProperty(prop) && !isNaN(d[prop])) {
            if (d[prop].toString().toLowerCase().includes(filtro)) {
              return true;
            }
          } else if (d.hasOwnProperty(prop)) {
            if (d[prop].toString().toLowerCase().includes(filtro)) {
              return true;
            }
          }
        }
        return false;
      });
    } else {
      this.datosFiltrados = this.datos;
    }
  }
}
