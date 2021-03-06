import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1";
  private apiKey = "AIzaSyCIlif3pZ9CoeE-5H-Ljlxm0J4TVHcKJ8E";

  private userToken: string;
  //crear usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const data = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
      data
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
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
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    
    let hoy= new Date();
    hoy.setSeconds(120);

    localStorage.setItem('expirationTime', hoy.getTime().toString());
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenticated(): boolean{

    if(this.userToken.length < 2){
      return false;
    }

    const expirationTime = Number(localStorage.getItem('expirationTime'));
    const expiraDate = new Date();
    expiraDate.setTime(expirationTime);

    if(expiraDate > new Date()){
      return true;
    }else{
      return false;
    }

  }
}
