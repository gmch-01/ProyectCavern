import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: any = [];
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuario = res;
        console.log(res);
      },

      err => console.error(err)
    )
  }

}
