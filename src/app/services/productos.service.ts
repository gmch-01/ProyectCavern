import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class ProductosService {
    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getProducto() {
        return this.http.get(`${this.API_URI}/productos`)
    }

    getProductoid(id: string) {
        return this.http.get<Producto>(`${this.API_URI}/productos/${id}`);
    }

    deleteProducto(id: String) {
        return this.http.delete(`${this.API_URI}/productos/${id} `)
    }

    updateProducto(id: string, updatedProducto: Producto) {
        return this.http.put(`${this.API_URI}/productos/${id}`, updatedProducto)
    }

    saveProducto(Producto: Producto): Observable<Producto> {
        return this.http.post(`${this.API_URI}/productos`, Producto)

    }
}