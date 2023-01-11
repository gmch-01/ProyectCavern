import { Component, OnInit } from '@angular/core';
import { HojaProduccionService } from '../../../services/hojaproduccion.service';
import { Producto } from '../../../models/Producto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormularioComponent } from '../titulo/formulario/formulario.component';
@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent implements OnInit {

  panelOpenState = false;
  produccion: any;


  constructor(private HojaProduccionService: HojaProduccionService) { 


  }

  ngOnInit(): void {
    this.getProductos();

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
      this.produccion = Object.values(this.produccion)
    }

    actualizarProducto(progreso: number){
       console.log(progreso, "EL NUEVO PROGRESO")
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

