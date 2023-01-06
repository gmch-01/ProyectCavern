import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Insumo } from '../../insumos/insumo';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formulario-kardex',
  templateUrl: './formulario-kardex.component.html',
  styleUrls: ['./formulario-kardex.component.css']
})
export class FormularioKardexComponent {

  formNewUser!: FormGroup ;
 

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioKardexComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.formNew();

    throw new Error('Method not implemented.');
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log('si se puede');
  }

  formNew() {
    this.formNewUser = this._fb.group({
      id_det_insumo: [''],
      fecha_entrada: [''],
      proveedor: [''],
      cantidad:[''],
      insumo:[''],
      peso: [''],
      usuario: [''],
    });
  }
}

export interface DialogData {
  id_det_insumo: number;
  fecha_entrada: string;
  proveedor: string;
  cantidad:string,
  insumo:string,
  peso: string;
  usuario: string;
}
