import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';
import { AgregarCelularComponent } from '../components/agregar-celular/agregar-celular.component';
import { ListaProductosComponent } from '../components/lista-productos/lista-productos.component';
import { ProductosPage } from './productos.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule
  ],
  declarations: [ProductosPage,AgregarCelularComponent,ListaProductosComponent] 
})
export class ProductosPageModule {}