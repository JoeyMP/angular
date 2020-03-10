import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre: string = "Capitán América";
  nombreCapitalizado: string = "jOey mELenDeZ panANa";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 12345.5;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    direccion: {
      calle: "Primera",
      casa: "20"
    }
  };

  valorPromesa = new Promise<String>(resolve => {
    setTimeout(() => {
      resolve("Llego la data");
    }, 4500);
  });

  fecha: Date = new Date();

  idioma: string = "en";

  videoUrl: string = 'https://www.youtube.com/embed/7QazLLlLS3Q';
}
