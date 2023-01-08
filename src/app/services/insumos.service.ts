import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Insumo } from '../models/Insumo';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class InsumosService {
    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getInsumo() {
        return this.http.get(`${this.API_URI}/games`)
    }

    getInsumoid(id: string) {
        return this.http.get<Insumo>(`${this.API_URI}/games/${id}`);
    }

    deleteInsumo(id: String) {
        return this.http.delete(`${this.API_URI}/games/${id} `)
    }

    updateInsumo(id: string, updatedInsumo: Insumo) {
        return this.http.put(`${this.API_URI}/games/${id}`, updatedInsumo)
    }

    saveInsumo(Insumo: Insumo): Observable<Insumo> {
        return this.http.post(`${this.API_URI}/games`, Insumo)

    }
}