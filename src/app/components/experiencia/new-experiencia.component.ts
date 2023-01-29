import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  nombre : string = '';
  descripcion : string = '';
  periodo : string = '';
  imagen : string = '';

  constructor(private experienciaServ: ServExperienciaService, private router: Router) { }  

  ngOnInit(): void {
  }

  onCreate():void {
    const exp = new Experiencia(this.nombre, this.descripcion,this.periodo,this.imagen);
    this.experienciaServ.save(exp).subscribe(data => {
      alert("Experiencia agregada")
      this.router.navigate(['']);
    }, err =>{
      alert("Error al cargar los datos");
      this.router.navigate(['']);
    })
  }


}
