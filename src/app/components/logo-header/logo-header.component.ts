import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-header',
  templateUrl: './logo-header.component.html',
  styleUrls: ['./logo-header.component.css']
})
export class LogoHeaderComponent {

  constructor(private router:Router) { }

  ngOnInit(): void{

  }

  login(){
    this.router.navigate(['/login']);
  }

}
