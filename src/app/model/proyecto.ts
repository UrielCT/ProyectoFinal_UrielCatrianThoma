export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    fechaReali: string;
    link: string;
    imagen: string;

    constructor(nombre: string, descripcion: string, fechaReali: string, link: string, imagen: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaReali = fechaReali;
        this.link = link;
        this.imagen = imagen;
    }
}
