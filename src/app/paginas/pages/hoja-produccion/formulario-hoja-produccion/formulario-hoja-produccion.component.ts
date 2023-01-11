import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HojaProduccion } from '../../../../models/HojaProduccion';
import { Receta } from '../../../../models/Receta';
@Component({
  selector: 'app-formulario-hoja-produccion',
  templateUrl: './formulario-hoja-produccion.component.html',
  styleUrls: ['./formulario-hoja-produccion.component.css']
})
export class FormularioHojaProduccionComponent implements OnInit {
  selected = this.data.id_receta
  datacompleto: HojaProduccion
  control: any
 

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioHojaProduccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data)
    this.datacompleto = { id_hoja_produccion: this.data.id_hoja_produccion, id_receta: this.selected, cantidad: this.data.cantidad, fecha_hoja: this.data.fecha_hoja, encargado: this.data.encargado }
  }
  ngOnInit(): void {    
    this.control = JSON.parse(localStorage.getItem("Control")!)
  console.log("llego EL CONTROL", this.control);

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log('si se puede');
  }

}