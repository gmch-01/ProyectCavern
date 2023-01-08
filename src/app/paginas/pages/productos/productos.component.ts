import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto: any;
  constructor(private ProductoService: ProductosService) {
  }
  ngOnInit() {
    console.log("entro");
    this.getProductos();
  }

  getProductos() {
    this.ProductoService.getProducto().subscribe(
      res => {
        this.producto = res;
        localStorage.setItem("listaProducto", JSON.stringify(this.producto));
        console.log(this.producto);
      },

      err => console.error(err)
    )
  }
}



