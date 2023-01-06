import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: any;
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    console.log("entro");
    this.getUsers();
  }

  getUsers() {
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuario = res;
        localStorage.setItem("listaUser", JSON.stringify(this.usuario));
        console.log(this.usuario);
      },

      err => console.error(err)
    )
  }
}
