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

  @HostBinding('class') classes = 'row';


  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioKardexComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: AlmacenIns,
    private almaceninsService: AlmacenInsService
  ) { console.log(data) }
  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log('si se puede');
  }

}


