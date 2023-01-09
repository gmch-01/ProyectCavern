import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Receta } from '../../../../models/Receta';
import { Producto } from '../../../../models/Producto';

import { RecetasService } from '../../../../services/recetas.service';
import { ProductosService } from '../../../../services/productos.service';


@Component({
  selector: 'app-formulario-recetas',
  templateUrl: './formulario-recetas.component.html',
  styleUrls: ['./formulario-recetas.component.css']
})
export class FormularioRecetasComponent implements OnInit {
  selected = this.data.id_producto;
  datacompleto: Receta

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioRecetasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Receta
  ) {
    console.log(data)
    this.datacompleto = { id_receta: this.data.id_receta, id_producto: this.selected, id_insumo: this.data.id_insumo, cantidad: this.data.cantidad }
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
