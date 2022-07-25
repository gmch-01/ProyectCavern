import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  ngOnInit(): void {
  }

  ingresar() {

    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'gcuevash' && password == '1234') {
      //redireccion al dashboard
      this.redireccion();
    } else {
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('Usuario o Contraseña Ingresado son Invalidos', '', { duration: 5000, horizontalPosition: 'center', verticalPosition: 'top' })
  }

  redireccion() {
    this.router.navigate(['paginas/dashboard'])
  }

}
