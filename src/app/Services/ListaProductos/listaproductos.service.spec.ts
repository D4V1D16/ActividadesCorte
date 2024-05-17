import { TestBed } from '@angular/core/testing';

import { ListaproductosService } from './listaproductos.service';

describe('ListaproductosService', () => {
  let service: ListaproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
