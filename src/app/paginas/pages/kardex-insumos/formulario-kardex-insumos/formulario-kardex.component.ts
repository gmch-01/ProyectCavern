import { Component, OnInit, Inject, HostBinding } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlmacenIns } from '../../../../models/AlmacenIns';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlmacenInsService } from '../../../../services/almacenins.service';

@Component({
  selector: 'app-formulario-kardex',
  templateUrl: './formulario-kardex.component.html',
  styleUrls: ['./formulario-kardex.component.css']
})
export class FormularioKardexComponent {
   datacompleto: AlmacenIns
  @HostBinding('class') classes = 'row';


  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioKardexComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) 
  { console.log(data)

  this.datacompleto = {fecha_entrada: this.data.fecha_entrada, proveedor: this.data.proveedor, cantidad:this.data.cantidad,id_insumo:this.data.id_insumo, fecha_vencimiento: this.data.fecha_vencimiento }
  }


  onCancel(): void {
    this.dialogRef.close();
  }

}


