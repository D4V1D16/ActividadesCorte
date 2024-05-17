import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/Services/CarritoCompras/carrito.service';
import { Celular } from 'src/app/folderInterfaces/producto.interface';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss'],
})
export class CarritoComprasComponent implements OnInit {

  listaCarrito: Celular[];

  constructor(protected carroService: CarritoService) { }

  ngOnInit() {
    this.listaCarrito = this.carroService.getCarrito();
    console.log(this.listaCarrito);
  }

}