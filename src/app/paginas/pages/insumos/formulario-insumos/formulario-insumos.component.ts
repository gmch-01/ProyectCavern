import { parseHostBindings } from '@angular/compiler';
import { Component, Inject, HostBinding } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Insumo } from 'src/app/models/Insumo';

import { InsumosService } from '../../../../services/insumos.service';


@Component({
  selector: 'app-formulario-insumos',
  templateUrl: './formulario-insumos.component.html',
  styleUrls: ['./formulario-insumos.component.css']
})
export class FormularioInsumosComponent {

  @HostBinding('class') classes = 'row';



  constructor(public dialogRef: MatDialogRef<FormularioInsumosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Insumo,
    private insumosService: InsumosService) { console.log(data) }

  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log("si se puede")
  }

  saveInsumo() {

  }
}

