import { Component, OnInit } from '@angular/core';
import { InventarioProdService } from 'src/app/services/inventarioprod.service';
@Component({
  selector: 'app-tabla-prod',
  templateUrl: './tabla-prod.component.html',
  styleUrls: ['./tabla-prod.component.css']
})
export class TablaProdComponent implements OnInit {
  displayedColumns: string[] = [
    'producto', 'cantidad'];
  datos: any 
  InventarioProd: any;
  constructor(private InventarioProdService: InventarioProdService) {
    
    this.InventarioProdService.getInventarioProd().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)

   })}

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInvProductoEsp")!)
    console.log("refrecar ", this.datos);
  }

}
