import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistPedidoComponent } from './hist-pedido.component';

describe('HistPedidoComponent', () => {
  let component: HistPedidoComponent;
  let fixture: ComponentFixture<HistPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
