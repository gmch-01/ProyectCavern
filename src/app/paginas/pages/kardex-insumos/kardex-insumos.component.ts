import { Component, OnInit } from '@angular/core';
import { AlmacenInsService } from '../../../services/almacenins.service';

@Component({
  selector: 'app-kardex-insumos',
  templateUrl: './kardex-insumos.component.html',
  styleUrls: ['./kardex-insumos.component.css']
})
export class KardexInsumosComponent implements OnInit {

  almacenins: any;
  constructor(private AlmacenInsService: AlmacenInsService) { }

  ngOnInit(): void {
    console.log("entro");
    this.getAlmacen();
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

}
