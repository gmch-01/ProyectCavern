import { Component, OnInit } from '@angular/core';
import { InventarioProdService } from 'src/app/services/inventarioprod.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

  displayedColumns: string[] = [
    'producto', 'cantidad'];
  datos: any 
  constructor(private inventarioProdService: InventarioProdService) { 
    this.inventarioProdService.getInventarioProd().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    
   })
  }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInvProducto")!)
    console.log("refrecar ", this.datos);
  }

}
