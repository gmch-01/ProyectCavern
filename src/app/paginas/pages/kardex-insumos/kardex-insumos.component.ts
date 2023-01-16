import { Component, OnInit } from '@angular/core';
import { AlmacenInsService } from '../../../services/almacenins.service';
import { InventarioInsService } from '../../../services/inventarioins.service';
import { HojaProduccion } from '../../../models/HojaProduccion';
import { HojaProduccionService } from '../../../services/hojaproduccion.service';
@Component({
  selector: 'app-kardex-insumos',
  templateUrl: './kardex-insumos.component.html',
  styleUrls: ['./kardex-insumos.component.css']
})
export class KardexInsumosComponent implements OnInit {

  almacenins: any;
  InventarioIns: any;
  public produccion: any 
  constructor(private AlmacenInsService: AlmacenInsService,
    private HojaProduccionService: HojaProduccionService,
    private InventarioInsService: InventarioInsService) { }

  ngOnInit(): void {
    console.log("entro");
    this.getAlmacen();
    this.getProductos();

  }

  getAlmacen() {
    this.AlmacenInsService.getAlmacenIns().subscribe(
      res => {
        this.almacenins = res;
        localStorage.setItem("listaAlmacenIns", JSON.stringify(this.almacenins));
        console.log(this.almacenins);
      },

      err => console.error(err)
    )
  }

  getInventarioIns(){
    this.InventarioInsService.getInventarioIns().subscribe(
      res => {
        this.InventarioIns = res;
        localStorage.setItem("listaInvInsumo", JSON.stringify(this.InventarioIns));
        console.log(this.InventarioIns);
      },

      err => console.error(err)
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


  getProductos() {
    this.HojaProduccionService.getHojaProduccion().subscribe(
      res => {
        this.produccion = res;
        localStorage.setItem("listaProduccion", JSON.stringify(this.produccion));
        console.log(this.produccion, " DATOS DE PROD");
      },

      err => console.error(err)
    )
    this.produccion = JSON.parse(localStorage.getItem("listaProduccion")!)
    console.log("llego LOS DATOS", this.produccion);
    this.produccion = Object.values(this.produccion);
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
      { id_hoja_produccion: id, id_receta: idrecetaX, cantidad: produccion.cantidad, fecha_hoja: produccion.fecha_hoja, encargado: produccion.encargado, progreso: progreso, peso_recibido: produccion.peso_recibido, embolsado: produccion.embolsado }
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


}
