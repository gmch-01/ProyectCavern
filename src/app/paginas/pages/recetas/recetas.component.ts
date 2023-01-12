import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../../services/recetas.service'
import {ProductosService} from  '../../../services/productos.service'


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: any;
  producto: any;
  constructor(private recetasService: RecetasService,
    private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getRecetas()
    this.getProductos()
  }

  getRecetas() {
    this.recetasService.getReceta().subscribe(
      res => {
        this.recetas = res;
        localStorage.setItem("listaReceta", JSON.stringify(this.recetas));
        console.log(this.recetas);
      },

      err => console.error(err)
    )
  }

  getProductos() {
    this.productosService.getProducto().subscribe(
      res => {
        this.producto = res;
        localStorage.setItem("listaProductoR", JSON.stringify(this.producto));
        console.log(this.producto);
      },

      err => console.error(err)
    )

  }

  getInsumos() {
    
  }

}
