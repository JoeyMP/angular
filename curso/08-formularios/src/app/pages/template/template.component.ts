import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario={
    nombre: ''
  }

  constructor() { }

  ngOnInit() {
  }

  save(forma : NgForm){
    console.log('submit');
    console.log(forma);
  }

}
