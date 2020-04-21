import { Component, OnInit } from "@angular/core";
import { UsuarioModel } from "../../models/usuario.model";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(private auth: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log("form", form);

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Esperre por favor...'
    });
    Swal.showLoading();

    this.auth.registerUser(this.usuario).subscribe(
      (data) => {
        console.log(data);
        Swal.close();
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log(error.error.error.message);
        Swal.fire({
          title: 'Error al autenticar',
          icon: 'error',
          text: error.error.error.message
        });
      }
    );
  }
}
