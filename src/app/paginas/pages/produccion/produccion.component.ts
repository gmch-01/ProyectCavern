import { Component, OnInit } from '@angular/core';
import { HojaProduccionService } from '../../../services/hojaproduccion.service';
import { Producto } from '../../../models/Producto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormularioComponent } from '../titulo/formulario/formulario.component';
import { HojaProduccion } from '../../../models/HojaProduccion';
@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent implements OnInit {

  panelOpenState = false;
 public produccion: any 
 public produccionHoy: any 
  peso = 0;
  embolsado = 0;


  constructor(private HojaProduccionService: HojaProduccionService) {


  }

  ngOnInit(): void {
    this.getProductosHoy();
    this.getProductos();

  }
  getProductosHoy() {
    this.HojaProduccionService.getHojaProduccionHoy().subscribe(
      res => {
        this.produccion = res;
        localStorage.setItem("listaHoy", JSON.stringify(this.produccion));
        console.log(this.produccion, " DATOS DE PROD");
      },

      err => console.error(err)
    )
    this.produccion = JSON.parse(localStorage.getItem("listaHoy")!)
    console.log("llego LOS DATOS", this.produccion);
    this.produccion = Object.values(this.produccion);
  }

  getProductos() {
    this.HojaProduccionService.getHojaProduccion().subscribe(
      res => {
        this.produccionHoy = res;
        localStorage.setItem("listaProduccion", JSON.stringify(this.produccionHoy));
        console.log(this.produccionHoy, " DATOS DE PROD");
      },

      err => console.error(err)
    )
    this.produccion = JSON.parse(localStorage.getItem("listaProduccion")!)
    console.log("llego LOS DATOS", this.produccionHoy);
    this.produccion = Object.values(this.produccionHoy);
  }

  actualizarProducto(progreso: number, id: number, produccion: HojaProduccion, idreceta: string) {
    var idrecetaN
    var idrecetaX
    if (idreceta == "Pan molde") {
      idrecetaN = "50001";
      idrecetaX = Number(idrecetaN);
    }
    if (idreceta == "Sarnita") {
      idrecetaN = "50008";
      idrecetaX = Number(idrecetaN);
    }
    if (idreceta == "Hamburguesa") {
      idrecetaN = "50014";
      idrecetaX = Number(idrecetaN);
    }

    const updateProd: HojaProduccion =
      {id_receta: idrecetaX, cantidad: produccion.cantidad, fecha_hoja: produccion.fecha_hoja, encargado: produccion.encargado, progreso: progreso, peso_recibido: produccion.peso_recibido, embolsado: produccion.embolsado }
    const ids = id.toString()
    console.log(updateProd, "NUEVOS DATOS")
 
    this.HojaProduccionService.updateHojaProduccion(ids, updateProd).subscribe(
      res => {
        this.produccion = res;
        console.log(this.produccion)
      },
      err => console.log(err)
    )
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}

