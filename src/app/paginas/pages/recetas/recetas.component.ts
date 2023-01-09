import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../../services/recetas.service'


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: any;
  constructor(private recetasService: RecetasService) { }

  ngOnInit(): void {
    this.getRecetas()
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

}
