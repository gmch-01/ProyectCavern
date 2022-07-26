import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormularioComponent } from './formulario/formulario.component';

let animal: string;
let name: string; 
let nombre:string;
let id: number;
@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})

export class TituloComponent implements OnInit {
  animal= '';
  name='';
  nombre= '';
  id= '';
  receta= ''; 

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioComponent, {
      width: '400px' ,
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}

