import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Insumo } from '../../insumos/insumo';
@Component({
  selector: 'app-formulario-kardex',
  templateUrl: './formulario-kardex.component.html',
  styleUrls: ['./formulario-kardex.component.css']
})
export class FormularioKardexComponent {

  constructor(public dialogRef: MatDialogRef<FormularioKardexComponent>, @Inject(MAT_DIALOG_DATA) public data: Insumo) { console.log(data) }

  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log("si se puede")
  }
}
