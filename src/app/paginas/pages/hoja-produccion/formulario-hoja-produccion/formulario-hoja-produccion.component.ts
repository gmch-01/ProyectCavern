import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-hoja-produccion',
  templateUrl: './formulario-hoja-produccion.component.html',
  styleUrls: ['./formulario-hoja-produccion.component.css']
})
export class FormularioHojaProduccionComponent implements OnInit {

  formNewUser!: FormGroup ;
 

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioHojaProduccionComponent>,
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
      id_produccion: [''],
      id_hoja_prod: [''],
      fecha_prod: [''],
      encargado: [''],
      descripcion: [''],
    });
  }
}

export interface DialogData {
  id_produccion: number;
  id_hoja_prod: string;
  fecha_prod: string;
  encargado: string;
  descripcion: number;
}
