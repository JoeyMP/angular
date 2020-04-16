import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1";
  private apiKey = "AIzaSyCIlif3pZ9CoeE-5H-Ljlxm0J4TVHcKJ8E";

  //crear usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {}

  logout() {}

  login(usuario: UsuarioModel) {
    const data = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
      data
    );
  }

  registerUser(usuario: UsuarioModel) {
    const data = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apiKey}`,
      data
    );
  }
}
