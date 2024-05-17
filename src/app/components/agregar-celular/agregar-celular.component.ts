import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Celular } from 'src/app/folderInterfaces/producto.interface';

@Component({
  selector: 'app-agregar-celular',
  templateUrl: './agregar-celular.component.html',
  styleUrls: ['./agregar-celular.component.scss'],
})
export class AgregarCelularComponent  implements OnInit {
  marca: string = '';
  modelo: string = '';
  precio: number = 0;
  almacenamientoInterno: number = 0;
  color: string = '';
  imagen: string = '';
  ratingcount: number = 0;
  ratingrate: number = 0;

  @Input() mensajePadre: string = '';
  @Output() eventoCrearCelular = new EventEmitter<Celular>();

  constructor() { }

  ngOnInit() {}

  guardarProducto() {
    const nuevoCelular: Celular = {
      marca: this.marca,
      modelo: this.modelo,
      precio: this.precio,
      almacenamientoInterno: this.almacenamientoInterno,
      color: this.color,
      imagen: this.imagen,
      rating: {
        count: this.ratingcount,
        rate: this.ratingrate
      }
    };
    this.eventoCrearCelular.emit(nuevoCelular);
  }

  
}
