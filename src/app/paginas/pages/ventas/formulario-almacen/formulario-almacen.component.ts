import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlmacenFin } from 'src/app/models/AlmacenFin';
import { AlmacenFinService } from '../../../../services/almacenfin.service';

@Component({
  selector: 'app-formulario-almacen',
  templateUrl: './formulario-almacen.component.html',
  styleUrls: ['./formulario-almacen.component.css']
})
export class FormularioAlmacenComponent implements OnInit {

  formNewAlmacen!: FormGroup;


  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioAlmacenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private AlmacenFinService: AlmacenFinService
  ) { }
  ngOnInit(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log('si se puede');
  }

}

