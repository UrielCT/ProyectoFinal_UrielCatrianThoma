import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = new Experiencia("","","","");

  constructor(private experienciaServ: ServExperienciaService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log("id: " +id);
    

    this.experienciaServ.detail(id).subscribe(data => {
      this.expLab = data;
    }, err => {
      alert("Error al editar experiancia");
      console.log(err);
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.experienciaServ.update(id, this.expLab).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar exp");
      this.router.navigate(['']);
    })
  }


}
