import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-almacen',
  templateUrl: './formulario-almacen.component.html',
  styleUrls: ['./formulario-almacen.component.css']
})
export class FormularioAlmacenComponent implements OnInit {

  formNewAlmacen!: FormGroup ;
 

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioAlmacenComponent>,
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
    this.formNewAlmacen = this._fb.group({
      fecha_registro: [''],
      cantidad: [''],
      producto: [''],
      encargado: [''],
    });
  }
}

export interface DialogData {
  ci: number;
  nombre: string;
  apellido: string;
  direccion: string;
  numcel: number;
  nombreuser: string;
  password: string;
  genero: string;
  fechareg: string;
}

