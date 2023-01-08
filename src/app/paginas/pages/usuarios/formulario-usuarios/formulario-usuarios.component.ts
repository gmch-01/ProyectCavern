import { Component, Inject, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../../../models/Usuario';
import { UsuariosService } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css'],
})
export class FormularioUsuariosComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormularioUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private UsuariosService: UsuariosService
  ) { console.log(data) }
  ngOnInit(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  agregar() {
    console.log('si se puede');
  }


}

