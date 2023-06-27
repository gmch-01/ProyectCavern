import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioComponent } from '../../titulo/formulario/formulario.component';
import { Receta } from '../../../../models/Receta';
import { RecetasService } from '../../../../services/recetas.service'
import { FormularioRecetasComponent } from '../formulario-recetas/formulario-recetas.component'

@Component({
  selector: 'app-tabla-recetas',
  templateUrl: './tabla-recetas.component.html',
  styleUrls: ['./tabla-recetas.component.css']
})
export class TablaRecetasComponent implements OnInit {

  columnas: string[] = [
    'id_receta',
    'producto',
    'insumo',
    'cantidad',
    'unidad',
    'accion',
    'eliminar'
  ];

  datos: any;
  recetaesp: any;
  productos: any;

  dataSource: any;
  recetaform: Receta = {
    id_receta: 0,
    id_producto: 0,
    id_insumo: 0,
    cantidad: 0
  }

  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private recetaService: RecetasService) {
    this.recetaService.getReceta().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    })
  }

  ngOnInit() {
    this.datos = JSON.parse(localStorage.getItem("listaReceta")!)
    console.log("llego ", this.datos);
    this.recetaesp = JSON.parse(localStorage.getItem("listaRecetaEsp")!)
    console.log("llego ESPECIAL", this.recetaesp);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(FormularioRecetasComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.recetaform = result;
      console.log(this.recetaform);
      if (result) {
        this.saveReceta();
      }
    });
  }
  saveReceta() {
    this.recetaService.saveReceta(this.recetaform).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
    console.log(this.recetaform)
  }

  eliminarDialog(id: string): void {
    this.recetaService.deleteReceta(id).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

  listar(producto: string) {
  }
  filtrarInsumos(producto: string) {
    return this.datos.filter((dato: any) => dato.producto === producto);
  }


}
