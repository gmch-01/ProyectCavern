export interface HojaProduccion {
    id_hoja_produccion?: number;
    id_receta?: number;
    cantidad?: number;
    fecha_hoja?: string;
    encargado?: string;
    progreso?: number;
    peso_recibido?: number;
    embolsado?: number;
}