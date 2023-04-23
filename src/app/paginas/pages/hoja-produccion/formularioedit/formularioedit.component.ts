import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HojaProduccion } from '../../../../models/HojaProduccion';
@Component({
  selector: 'app-formularioedit',
  templateUrl: './formularioedit.component.html',
  styleUrls: ['./formularioedit.component.css']
})
export class FormularioeditComponent implements OnInit {
  selected = this.data.id_receta
  datacompleto: HojaProduccion
  control: any
  recetaS = ""
 

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
     {
    console.log(data)
      if (this.data.id_receta == 50001){
        this.recetaS = "Pan molde"
      }
      if (this.data.id_receta == 50002){
        this.recetaS = "Sarnita"
      }
      if (this.data.id_receta == 50003){
        this.recetaS = "Hamburguesa "
      }

      
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
