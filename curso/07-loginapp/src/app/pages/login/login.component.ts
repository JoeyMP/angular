import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  login(form: NgForm){
    if(form.invalid){
      return;
    } 
    console.log("Formulario valido",form);
    console.log(this.usuario);

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Esperre por favor...'
    });
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      (data) => {
        console.log(data);
        Swal.close();
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log(error);
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
