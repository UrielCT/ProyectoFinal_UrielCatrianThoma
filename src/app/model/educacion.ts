export class Educacion {
    id?: number;
    nombre: string;
    descripcion: string;
    periodo: string;
    imagen: string;

    constructor(nombre: string, descripcion: string, periodo: string, imagen: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.periodo = periodo;
        this.imagen = imagen;
    }
}