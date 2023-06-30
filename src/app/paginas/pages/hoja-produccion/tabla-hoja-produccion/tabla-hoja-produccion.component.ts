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
  filtro = '';

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
    this.datos = Object.values(this.datos)
    console.log("llego ", this.datos);
    this.datosFiltrados = this.datos
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

  openEdit(id: number, edit: HojaProduccion, receta: string) {
    let recetaInt
    if (receta == "Pan molde") {
      receta = "50001"
      recetaInt = parseInt(receta)
    }
    if (receta == "Sarnita") {
      receta = "50008"
      recetaInt = parseInt(receta)
    }

    if (receta == "Hamburguesa") {
      receta = "50014"
      recetaInt = parseInt(receta)
    }
    let dialogRef = this.dialog.open(FormularioeditComponent, {
      width: '400px',
      data: { id_hoja_produccion: id, id_receta: recetaInt, cantidad: edit.cantidad, fecha_hoja: edit.fecha_hoja, encargado: edit.encargado, progreso: edit.progreso, peso_recibido: edit.peso_recibido, embolsado: edit.embolsado },
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
      this.datosFiltrados = this.datos.filter((d: any) => {
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
  imprimirDatos() {
    const tabla: any = document.getElementById('Tablaprod');
    const tablaClonada = tabla.cloneNode(true) as HTMLTableElement;

    // Obtener las columnas a ocultar (por ejemplo, columna 2 y columna 4)
    const columnasOcultas = [7, 8]; // Índices de las columnas a ocultar (base 0)

    // Obtener todas las filas de la tabla
    const filas = tablaClonada.querySelectorAll('tr');

    // Recorrer cada fila y ocultar las columnas seleccionadas
    filas.forEach((fila) => {
      const celdas = fila.querySelectorAll('td, th');
      columnasOcultas.forEach((indiceColumna) => {
        const celdaOcultar = celdas[indiceColumna];
        if (celdaOcultar) {
          celdaOcultar.remove();
        }
      });
    });

    // Crear un elemento contenedor para la tabla clonada
    const contenedorTabla = document.createElement('div');
    contenedorTabla.appendChild(tablaClonada);

    // Crear un elemento para la cabecera
    const cabecera = document.createElement('div');

    // Agregar el logotipo a la cabecera
    const logo = document.createElement('img');
    logo.src = '../../../assets/img/LogoMaxiPan.png';
    logo.width = 80;
    cabecera.appendChild(logo);

    // Agregar el título a la cabecera
    const titulo = document.createElement('h1');
    titulo.textContent = 'Historial de Producción';
    cabecera.appendChild(titulo);

    // Agregar la cabecera y la tabla al contenedor
    const contenedorImpresion = document.createElement('div');
    contenedorImpresion.appendChild(cabecera);
    contenedorImpresion.appendChild(contenedorTabla);

    // Abrir una nueva ventana y escribir el contenido del contenedor de impresión
    const ventana: any = window.open('', '', 'height=500,width=800');
    ventana.document.write('<html><head><title>Tabla</title></head><body>');
    ventana.document.write(contenedorImpresion.innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();

    // Imprimir la ventana
    ventana.print();
  }
}