import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log("Param Child Editar usuario");
    this.route.parent.paramMap.subscribe(param=> console.log(param));
  }

  ngOnInit() {
  }

}
