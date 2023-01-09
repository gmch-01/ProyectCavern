import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Receta } from '../models/Receta';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class RecetasService {
    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getReceta() {
        return this.http.get(`${this.API_URI}/recetas`)
    }

    getRecetaid(id: string) {
        return this.http.get<Receta>(`${this.API_URI}/recetas/${id}`);
    }

    deleteReceta(id: String) {
        return this.http.delete(`${this.API_URI}/recetas/${id} `)
    }

    updateReceta(id: string, updatedReceta: Receta) {
        return this.http.put(`${this.API_URI}/recetas/${id}`, updatedReceta)
    }

    saveReceta(Receta: Receta): Observable<Receta> {
        return this.http.post(`${this.API_URI}/recetas`, Receta)

    }
}