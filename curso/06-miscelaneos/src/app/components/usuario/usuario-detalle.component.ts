import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log("Param Child Detalle usuario");
    this.route.parent.paramMap.subscribe(param=> console.log(param));
  }

  ngOnInit() {
  }

}
