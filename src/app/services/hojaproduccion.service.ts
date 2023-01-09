import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HojaProduccion } from '../models/HojaProduccion';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HojaProduccionService {

    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getHojaProduccion() {
        return this.http.get(`${this.API_URI}/hojaprod`)
    }

    getHojaProduccionid(id: string) {
        return this.http.get<HojaProduccion>(`${this.API_URI}/hojaprod/${id}`);
    }

    deleteHojaProduccion(id: String) {
        return this.http.delete(`${this.API_URI}/hojaprod/${id} `)
    }

    updateHojaProduccion(id: string, updatedHojaProduccion: HojaProduccion) {
        return this.http.put(`${this.API_URI}/hojaprod/${id}`, updatedHojaProduccion)
    }

    saveHojaProduccion(HojaProduccion: HojaProduccion): Observable<HojaProduccion> {
        return this.http.post(`${this.API_URI}/hojaprod`, HojaProduccion)

    }
}