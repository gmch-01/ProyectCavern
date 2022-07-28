import { Component, Inject, } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  constructor(public dialogRef: MatDialogRef<FormularioComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close();
  }
  
  agregar (){
    console.log("sis e puede")
  }
}

export interface DialogData {
  animal: string ;
  name: string;
  nombre: string; 
  id: number;
  receta: string; 

}