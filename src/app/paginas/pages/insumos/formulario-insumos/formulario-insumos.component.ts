import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Insumo } from '../insumo';


@Component({
  selector: 'app-formulario-insumos',
  templateUrl: './formulario-insumos.component.html',
  styleUrls: ['./formulario-insumos.component.css']
})
export class FormularioInsumosComponent {
  

  constructor(public dialogRef: MatDialogRef<FormularioInsumosComponent>, @Inject(MAT_DIALOG_DATA) public data: Insumo) { console.log(data) }

  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log("si se puede")
}
}


