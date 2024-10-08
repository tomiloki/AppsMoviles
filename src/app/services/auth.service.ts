import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;  // Observador para gestionar el estado del usuario

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState;  // Obtenemos el estado del usuario (iniciado o no)
  }

  // Método para iniciar sesión con Firebase
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/home']);  // Navega a la página de inicio tras el inicio de sesión
      })
      .catch(error => {
        console.error("Error en el inicio de sesión: ", error);
        throw error;
      });
  }

  // Método para cerrar sesión
  logout(): Promise<void> {
    return this.afAuth.signOut()
      .then(() => {
        this.router.navigate(['/login']);  // Navega de vuelta a la página de inicio de sesión tras cerrar sesión
      });
  }

  // Método para registrar un nuevo usuario
  register(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/home']);  // Navega a la página de inicio tras registrarse
      })
      .catch(error => {
        console.error("Error en el registro: ", error);
        throw error;
      });
  }
}
