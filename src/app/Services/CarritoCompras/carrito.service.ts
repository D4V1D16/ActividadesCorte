import { Injectable } from '@angular/core';
import { Celular } from 'src/app/folderInterfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  listaCarrito:Celular[] = [
  {
      marca: "Samsung",
      modelo: "Galaxy S21",
      precio: 999,
      almacenamientoInterno: 128,
      color: "Negro",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_701848-MLA53734668228_022023-O.webp",
      rating: {
          count: 5,
          rate: 4
      }
    }
  ];


  constructor() { }

  agregarCelular(celular:Celular){
    this.listaCarrito.push(celular);
  }

  getCarrito(){
    return this.listaCarrito;
  }

  obtenerTotal():number{
    let sum:number = 0;
    for(let celulares in this.listaCarrito){
      sum += this.listaCarrito[celulares].precio;
    }
    return sum
  }
  
}
