import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddTripComponent } from './add-trip.component';
import { AddTripRoutingModule } from './add-trip-routing.module.ts'; // Ruta para el componente

@NgModule({
  declarations: [AddTripComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTripRoutingModule // Añadir la ruta si estás usando lazy loading
  ]
})
export class AddTripModule {}
