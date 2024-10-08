import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',  // Asegúrate de que la redirección inicial sea al login
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard],  // Protegemos la página con AuthGuard
  },
  {
    path: 'mis-datos',
    loadChildren: () => import('./pages/mis-datos/mis-datos.module').then(m => m.MisDatosPageModule),
  },
  {
    path: 'certificaciones',
    loadChildren: () => import('./pages/certificaciones/certificaciones.module').then(m => m.CertificacionesPageModule),
  },
  {
    path: 'experiencia-laboral',
    loadChildren: () => import('./pages/experiencia-laboral/experiencia-laboral.module').then(m => m.ExperienciaLaboralPageModule),
  },
  {
    path: '404', // Página para manejar errores 404
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule),
  },
  {
    path: '**', // Cualquier ruta no válida
    redirectTo: '404',  // Redirigir a la página de error 404
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
