
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { Component, OnInit } from '@angular/core';

import { FormularioComponent } from '../titulo/formulario/formulario.component';
import { InsumosService } from 'src/app/services/insumos.service';
@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {

  insumo: any
  constructor(private InsumoService: InsumosService) { }

  ngOnInit() {
    console.log("entro");
    this.getInsumos();
  }

  getInsumos() {
    this.InsumoService.getInsumo().subscribe(
      res => {
        this.insumo = res;
        localStorage.setItem("listaInsumo", JSON.stringify(this.insumo));
        console.log(this.insumo);
      },

      err => console.error(err)
    )
  }





}
