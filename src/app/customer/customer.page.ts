import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  
  nombre:String = "David";
  apellido:String = "Garcia";
  edad:number = 20;
  ciudad:String= "Bogota";
  pais:String= "Colombia";
  fecha:String = "5-03-2024";

  constructor() { }

  ngOnInit() {
  }

}
