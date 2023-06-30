import { Component, OnInit } from '@angular/core';
import { HojaProduccionService } from 'src/app/services/hojaproduccion.service'
import { ControlUnoService } from 'src/app/services/controluno.service'
import { PosiblesService } from 'src/app/services/posibles.service';


@Component({
  selector: 'app-hoja-produccion',
  templateUrl: './hoja-produccion.component.html',
  styleUrls: ['./hoja-produccion.component.css']
})


export class HojaProduccionComponent implements OnInit {
  hojaprod: any
  control: any;
  posibles: any;

  constructor(private HojaProduccionService: HojaProduccionService,
    private ControlUnoService: ControlUnoService,
    private PosiblesService: PosiblesService) { }

  ngOnInit(): void {
    console.log("entro");
    this.getHojaProd();
    this.getControl();
  }

  getHojaProd() {
    this.HojaProduccionService.getHojaProduccion().subscribe(
      res => {
        this.hojaprod = res;
        localStorage.setItem("listaHojaProd", JSON.stringify(this.hojaprod));
        console.log(this.hojaprod, "NUEVO GUARDADO ? ");
      },

      err => console.error(err)
    )

  }

  getControl() {
    this.ControlUnoService.getControlUno().subscribe(
      res => {
        this.control = res;
        localStorage.setItem("Control", JSON.stringify(this.control));
        console.log(this.control);
      },

      err => console.error(err)
    )
  }

  getPosible() {
    this.PosiblesService.getPosibles().subscribe(
      res => {
        this.posibles = res;
        localStorage.setItem("listaPosibles", JSON.stringify(this.posibles));
      },

      err => console.error(err)
    )

    this.posibles = JSON.parse(localStorage.getItem("listaPosibles")!)
    this.posibles = Object.values(this.posibles);
  }


}
