import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from '../../../../models/Producto';
import { ProductosService } from '../../../../services/productos.service';

@Component({
  selector: 'app-formularioprod',
  templateUrl: './formularioprod.component.html',
  styleUrls: ['./formularioprod.component.css']
})
export class FormularioprodComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  constructor(public dialogRef: MatDialogRef<FormularioprodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto ,
    private productosService: ProductosService) {console.log(data) }

    onCancel(): void {
      this.dialogRef.close();
    }
    
  ngOnInit(): void {
  }

}
