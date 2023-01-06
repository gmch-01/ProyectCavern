import { Component, OnInit } from '@angular/core';
import { AlmacenFinService } from '../../../services/almacenfin.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  almacenfin: any;
  constructor(private AlmacenFinService: AlmacenFinService) { }

  ngOnInit(): void {
    console.log("entro");
    this.getAlmacen();
  }

  getAlmacen() {
    this.AlmacenFinService.getAlmacenfin().subscribe(
      res => {
        this.almacenfin = res;
        localStorage.setItem("listaAlmacen", JSON.stringify(this.almacenfin));
        console.log(this.almacenfin);
      },

      err => console.error(err)
    )
  }

}
