import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksAddComponent } from './stocks-add.component';

describe('StocksAddComponent', () => {
  let component: StocksAddComponent;
  let fixture: ComponentFixture<StocksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
