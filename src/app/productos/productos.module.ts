import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';
import { ProductosPage } from './productos.page';
import { AgregarCelularComponent } from '../components/agregar-celular/agregar-celular.component'; // Import AgregarCelularComponent

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule
  ],
  declarations: [ProductosPage, AgregarCelularComponent] // Declare AgregarCelularComponent
})
export class ProductosPageModule {}