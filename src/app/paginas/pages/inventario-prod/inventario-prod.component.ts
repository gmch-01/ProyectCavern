import { Component, OnInit } from '@angular/core';
import { InventarioProdService } from 'src/app/services/inventarioprod.service';
@Component({
  selector: 'app-inventario-prod',
  templateUrl: './inventario-prod.component.html',
  styleUrls: ['./inventario-prod.component.css']
})
export class InventarioProdComponent implements OnInit {
  InventarioProd: any;
  constructor(private InventarioProdService: InventarioProdService) { }

  ngOnInit(): void {
    this.getInventarioProd();
    
}

getInventarioProd (){
  this.InventarioProdService.getInventarioProd().subscribe(
    res => {
      this.InventarioProd = res;
      localStorage.setItem("listaInvProducto", JSON.stringify(this.InventarioProd));
      console.log(this.InventarioProd);
    },

    err => console.error(err)
  )

}


}

