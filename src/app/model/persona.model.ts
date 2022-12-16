export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    imagen: string;

    constructor(nombre: string, apellido: string, descripcion:string, imagen:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }

}