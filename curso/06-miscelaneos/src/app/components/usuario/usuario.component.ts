import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
})
export class UsuarioComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    console.log("Param Parent");
    this.route.paramMap.subscribe(param=> console.log(param));
  }

  ngOnInit() {}
}
