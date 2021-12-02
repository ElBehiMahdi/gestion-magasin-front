import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksDeleteComponent } from './stocks-delete.component';

describe('StocksDeleteComponent', () => {
  let component: StocksDeleteComponent;
  let fixture: ComponentFixture<StocksDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
