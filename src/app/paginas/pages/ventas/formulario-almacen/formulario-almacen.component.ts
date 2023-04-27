import { Component, Inject, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlmacenFinService } from '../../../../services/almacenfin.service';
import { AlmacenFin } from 'src/app/models/AlmacenFin';
import { InventarioProd } from 'src/app/models/InventarioProd';



@Component({
  selector: 'app-formulario-almacen',
  templateUrl: './formulario-almacen.component.html',
  styleUrls: ['./formulario-almacen.component.css']
})
export class FormularioAlmacenComponent {

  datacompleto!: InventarioProd
  @HostBinding('class') classes = 'row';
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioAlmacenComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) {

    this.datacompleto = { tipo_prod: this.data.id_producto, fecha_vencimiento: this.data.fecha_vencimiento, cantidad_actual: this.data.cantidad }
  }





  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log('si se puede');
  }

}

