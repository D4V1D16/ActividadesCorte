import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Celular } from 'src/app/folderInterfaces/producto.interface';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent  implements OnInit {

  @Input() mensajePadre: string = '';
  @Output() eventoGuardarCelular = new EventEmitter<Celular>();

  carritoCelulares : Celular[] = [];
  constructor() { }

  ngOnInit() {}

  guardarProductoCarrito(){
    //renderizar total
  }

}
