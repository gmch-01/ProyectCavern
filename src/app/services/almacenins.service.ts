import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AlmacenIns } from '../models/AlmacenIns';
import { Observable } from 'rxjs';

// ESTE ES EL KARDEX DE INSUMOS
@Injectable({
    providedIn: 'root'
})
export class AlmacenInsService {

    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getAlmacenIns() {
        return this.http.get(`${this.API_URI}/almacenins`)
    }

    getAlmacenInsid(id: string) {
        return this.http.get<AlmacenIns>(`${this.API_URI}/almacenins/${id}`);
    }

    deleteAlmacenIns(id: String) {
        return this.http.delete(`${this.API_URI}/almacenins/${id} `)
    }

    updateAlmacenIns(id: string, updatedAlmacenIns: AlmacenIns) {
        return this.http.put(`${this.API_URI}/almacenins/${id}`, updatedAlmacenIns)
    }

    saveAlmacenIns(AlmacenIns: AlmacenIns): Observable<AlmacenIns> {
        return this.http.post(`${this.API_URI}/almacenins`, AlmacenIns)

    }
}