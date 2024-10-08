import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';  // Asegúrate de que SplashScreen está importado
import { StatusBar } from '@ionic-native/status-bar/ngx';        // Asegúrate de que StatusBar está importado

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();  // Inicializa la aplicación
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Configura la barra de estado con el estilo por defecto
      this.statusBar.styleDefault();
      
      // Oculta la pantalla de splash una vez que la plataforma está lista
      this.splashScreen.hide();
    });
  }
}
