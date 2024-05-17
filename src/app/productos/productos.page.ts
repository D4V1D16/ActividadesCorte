import { Component, OnInit } from '@angular/core';
import { Celular } from '../folderInterfaces/producto.interface';

import { Router } from '@angular/router';
import { ListaproductosService } from '../Services/ListaProductos/listaproductos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  mostrarCelular : boolean = false;
  mostrarLista : boolean = false;
  mostrarCarrito : boolean = false;
  constructor(private router:Router,private listaCelulares:ListaproductosService) { }

  ngOnInit() {

  }

  
  agregarProducto(celular: Celular) {
    this.listaCelulares.agregarCelular(celular)
  }


  mostrarProducto(){
    this.mostrarCelular = !this.mostrarCelular;
  }

  mostrarOcultarLista(){
    this.mostrarLista = !this.mostrarLista;
  }

  mostrarOcultarCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  home(){
    this.router.navigate([''])
  }
}
