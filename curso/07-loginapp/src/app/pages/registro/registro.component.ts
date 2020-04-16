import { Component, OnInit } from "@angular/core";
import { UsuarioModel } from "../../models/usuario.model";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log("form", form);
    this.auth.registerUser(this.usuario).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error.error.error.message);
      }
    );
  }
}
