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
  nombreExp : string = '';
  descripcionExp : string = '';

  constructor(private experienciaServ: ServExperienciaService, private router: Router) { }  

  ngOnInit(): void {
  }

  onCreate():void {
    const exp = new Experiencia(this.nombreExp, this.descripcionExp);
    this.experienciaServ.save(exp).subscribe(data => {
      alert("Experiencia agregada")
      this.router.navigate(['']);
    }, err =>{
      alert("Error al cargar los datos");
      this.router.navigate(['']);
    })
  }


}
