import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InventarioProd } from '../models/InventarioProd';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class InventarioProdService {
    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getInventarioProd() {
        return this.http.get(`${this.API_URI}/inventarioprod`)
    }
    getInventarioProdesp() {
        return this.http.get(`${this.API_URI}/inventarioprod/esp`)
    }

    getInventarioProdid(id: string) {
        return this.http.get<InventarioProd>(`${this.API_URI}/inventarioprod/${id}`);
    }

    deleteInventarioProd(id: String) {
        return this.http.delete(`${this.API_URI}/inventarioprod/${id} `)
    }

    updateInventarioProd(id: string, updatedInsumo: InventarioProd) {
        return this.http.put(`${this.API_URI}/inventarioprod/${id}`, updatedInsumo)
    }

    saveInventarioProd(Insumo: InventarioProd): Observable<InventarioProd> {
        return this.http.post(`${this.API_URI}/inventarioprod`, Insumo)

    }
}