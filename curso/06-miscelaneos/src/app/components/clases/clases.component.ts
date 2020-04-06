import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alert : string = "alert-danger";
  
  myProperties: Object={
    danger: false
  }

  loading: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  execute(){
    this.loading =true;
    setTimeout(() => {
      this.loading=false;
    }, 3000);
  }

}
