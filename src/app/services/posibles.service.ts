import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class PosiblesService {
    API_URI = 'http://localhost:3000/api'
    constructor(private http: HttpClient) { }

    getPosibles() {
        return this.http.get(`${this.API_URI}/posibles`)
    }

}