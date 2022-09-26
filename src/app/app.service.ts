import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs'; 
import { ProductosComponent } from './paginas/pages/productos/productos.component';


@Injectable()

export class AppService {
    constructor(private firestore: Firestore) {
    }      
    addPlace (productos: ProductosComponent) {
        const productobs = collection( this.firestore, 'productos'); 
        return addDoc(productobs, productos)
    }

   // getProductos(): Observable<Productos[]>{
     //   const productosbd= collection(this.firestore, 'productos');
       // return collectionData (productosbd, {idField: 'id'}) as Observable<Productos[]> ;
    }
    //}


