import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HojaProduccion } from '../../../../models/HojaProduccion';
@Component({
  selector: 'app-formulario-hoja-produccion',
  templateUrl: './formulario-hoja-produccion.component.html',
  styleUrls: ['./formulario-hoja-produccion.component.css']
})
export class FormularioHojaProduccionComponent implements OnInit {
  selected = this.data.id_receta
  datacompleto: HojaProduccion
 

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioHojaProduccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data)
    this.datacompleto = { id_hoja_produccion: this.data.id_hoja_produccion, id_receta: this.selected, cantidad: this.data.cantidad, fecha_hoja: this.data.fecha_hoja, encargado: this.data.encargado }
  }
  ngOnInit(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log('si se puede');
  }

}