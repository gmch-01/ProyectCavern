import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AlmacenFin } from '../models/AlmacenFin';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlmacenFinService {

    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getAlmacenfin() {
        return this.http.get(`${this.API_URI}/almacenfin`)
    }

    getAlmacenfinid(id: string) {
        return this.http.get<AlmacenFin>(`${this.API_URI}/almacenfin/${id}`);
    }

    deleteAlmacenfin(id: String) {
        return this.http.delete(`${this.API_URI}/almacenfin/${id} `)
    }

    updateAlmacenfin(id: string, updatedAlmacen: AlmacenFin) {
        return this.http.put(`${this.API_URI}/almacenfin/${id}`, updatedAlmacen)
    }

    saveAlmacenfin(AlmacenFin: AlmacenFin): Observable<AlmacenFin> {
        return this.http.post(`${this.API_URI}/almacenfin`, AlmacenFin)

    }
}