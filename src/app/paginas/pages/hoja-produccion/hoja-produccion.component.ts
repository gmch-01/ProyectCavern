import { Component, OnInit } from '@angular/core';
import { HojaProduccionService} from 'src/app/services/hojaproduccion.service'

@Component({
  selector: 'app-hoja-produccion',
  templateUrl: './hoja-produccion.component.html',
  styleUrls: ['./hoja-produccion.component.css']
})
export class HojaProduccionComponent implements OnInit {
  hojaprod: any
  constructor(private HojaProduccionService: HojaProduccionService) { }
  
  ngOnInit(): void {
    console.log("entro");
    this.getHojaProd();
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

}
