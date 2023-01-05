import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css'],
})
export class FormularioUsuariosComponent implements OnInit {
  formNewUser!: FormGroup ;
 

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioUsuariosComponent>,
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
      ci: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
      numcel: [''],
      nombreuser: [''],
      password: [''],
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
