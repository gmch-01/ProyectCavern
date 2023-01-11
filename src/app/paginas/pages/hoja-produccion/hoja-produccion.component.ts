import { Component, OnInit } from '@angular/core';
import { HojaProduccionService} from 'src/app/services/hojaproduccion.service'
import { ControlUnoService} from 'src/app/services/controluno.service'

@Component({
  selector: 'app-hoja-produccion',
  templateUrl: './hoja-produccion.component.html',
  styleUrls: ['./hoja-produccion.component.css']
})
export class HojaProduccionComponent implements OnInit {
  hojaprod: any
  control: any;
  constructor(private HojaProduccionService: HojaProduccionService,
    private ControlUnoService: ControlUnoService) { }
  
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
        console.log(this.hojaprod);
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
}
