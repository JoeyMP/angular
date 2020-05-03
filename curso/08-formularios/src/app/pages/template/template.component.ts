import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario={
    nombre: 'Joey',
    apellido: 'Melendez',
    correo: 'joy15.180@gmail.com'
  }

  constructor() { }

  ngOnInit() {
  }

  save(forma : NgForm){
    console.log('submit');
    if(forma.invalid){
      Object.values( forma.controls).forEach(control=>{
        control.markAsTouched();
      })
    }
  }

}
