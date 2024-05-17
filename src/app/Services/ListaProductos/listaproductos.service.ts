import { Injectable } from '@angular/core';
import { Celular } from 'src/app/folderInterfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaproductosService {
  arrCells: Celular[] = [
    {
        marca: "Samsung",
        modelo: "Galaxy S21",
        precio: 999,
        almacenamientoInterno: 128,
        color: "Negro",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_701848-MLA53734668228_022023-O.webp",
        rating:{
            count: 5,
            rate: 4
        }
    },

    {
        marca: "Apple",
        modelo: "iPhone 13",
        precio: 1099,
        almacenamientoInterno: 256,
        color: "Plata",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_821416-MLA47781962896_102021-O.webp",
        rating:{
          count: 6,
          rate: 8
      }
    },
    {
        marca: "Xiaomi",
        modelo: "Mi 11",
        precio: 799,
        almacenamientoInterno: 256,
        color: "Azul",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_644644-MLU69665123481_052023-O.webp",
        rating:{
          count: 8,
          rate: 2
      }
    },
    {
        marca: "OnePlus",
        modelo: "9 Pro",
        precio: 899,
        almacenamientoInterno: 256,
        color: "Verde",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_864695-MLA47698970218_092021-O.webp",
        rating:{
          count: 350,
          rate: 4.2
      }
    },
    {
        marca: "Google",
        modelo: "Pixel 6",
        precio: 699,
        almacenamientoInterno: 128,
        color: "Blanco",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_636688-MLA74650240550_022024-O.webp",
        rating:{
          count: 450,
          rate: 3.9
      }
      
    } 
];
  constructor() { }

  mostrarLista(){
    return this.arrCells;
  }

  agregarCelular(celular:Celular){
    this.arrCells.push(celular);
  }
}
