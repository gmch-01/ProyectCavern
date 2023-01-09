import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';
import { Producto } from '../../../models/Producto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormularioComponent } from '../titulo/formulario/formulario.component';
@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent implements OnInit {

  producto: any
  constructor(private ProductosService: ProductosService) { }

  ngOnInit(): void {}
    getProductos() {
      this.ProductosService.getProducto().subscribe(
        res => {
          this.producto = res;
          localStorage.setItem("listaProducto", JSON.stringify(this.producto));
          console.log(this.producto);
        },
  
        err => console.error(err)
      )
    }
  }

