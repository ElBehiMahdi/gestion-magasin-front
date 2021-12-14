import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStockComponent } from './chart-stock.component';

describe('ChartStockComponent', () => {
  let component: ChartStockComponent;
  let fixture: ComponentFixture<ChartStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
