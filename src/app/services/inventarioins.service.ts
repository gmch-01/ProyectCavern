import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InventarioIns } from '../models/InventarioIns';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class InventarioInsService {
    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getInventarioIns() {
        return this.http.get(`${this.API_URI}/inventarioins`)
    }

    getInventarioInsid(id: string) {
        return this.http.get<InventarioIns>(`${this.API_URI}/inventarioins/${id}`);
    }

    deleteInventarioIns(id: String) {
        return this.http.delete(`${this.API_URI}/inventarioins/${id} `)
    }

    updateInventarioIns(id: string, updatedInsumo: InventarioIns) {
        return this.http.put(`${this.API_URI}/inventarioins/${id}`, updatedInsumo)
    }

    saveInventarioIns(Insumo: InventarioIns): Observable<InventarioIns> {
        return this.http.post(`${this.API_URI}/inventarioins`, Insumo)

    }
}