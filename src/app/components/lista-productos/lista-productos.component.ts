import { Component, OnInit } from '@angular/core';
import { Celular } from 'src/app/folderInterfaces/producto.interface';
import { IonicModule } from '@ionic/angular';
import { ListaproductosService } from 'src/app/Services/ListaProductos/listaproductos.service';
import { CarritoService } from 'src/app/Services/CarritoCompras/carrito.service';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
})
export class ListaProductosComponent  implements OnInit {

  arrCells:Celular[];

  constructor(private listaProductos:ListaproductosService,private carroService:CarritoService) { }


  
  ngOnInit() {
    this.arrCells = this.listaProductos.mostrarLista();
  }

  agregarCarrito(cel:Celular){
    this.carroService.agregarCelular(cel);
  }

}
