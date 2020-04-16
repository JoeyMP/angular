import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  login(form: NgForm){
    if(form.invalid){
      return;
    } 
    console.log("Formulario valido",form);
    console.log(this.usuario);
    this.auth.login(this.usuario).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        console.log(error.error.error.message);
      }
    );
  }

}
