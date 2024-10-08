import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  passwordType: string = 'password';  // Muestra la contraseña como oculta por defecto
  passwordIcon: string = 'eye-off';   // Ícono de "ocultar" por defecto

  constructor(private authService: AuthService, private router: Router) {}

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';  // Cambia a tipo de texto para mostrar la contraseña
      this.passwordIcon = 'eye';   // Cambia el ícono a "mostrar"
    } else {
      this.passwordType = 'password';  // Vuelve a ocultar la contraseña
      this.passwordIcon = 'eye-off';   // Cambia el ícono a "ocultar"
    }
  }

  onLogin() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error("Error al iniciar sesión", error);
        alert("Error al iniciar sesión: " + error.message);
      });
  }
}
