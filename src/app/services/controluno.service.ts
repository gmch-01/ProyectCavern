import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HojaProduccion } from '../models/HojaProduccion';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ControlUnoService {

    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getControlUno() {
        return this.http.get(`${this.API_URI}/control`)
    }

}
//MODEL TIPO RECETA