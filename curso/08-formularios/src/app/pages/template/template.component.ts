import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PaisService } from "src/app/services/pais.service";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.css"],
})
export class TemplateComponent implements OnInit {
  //valores por defecto
  usuario = {
    nombre: "Joey",
    apellido: "Melendez",
    correo: "joy15.180@gmail.com",
    pais: ''
  };

  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit() {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
      this.paises.unshift({
        nombre: '[Seleccione Pais]',
        codigo: ''
      })
      console.log(this.paises);
    });
  }

  save(forma: NgForm) {
    console.log(forma);
    if (forma.invalid) {
      //marcar los controles como si hubieran sido tocados
      Object.values(forma.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }
}
