import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksEditComponent } from './stocks-edit.component';

describe('StocksEditComponent', () => {
  let component: StocksEditComponent;
  let fixture: ComponentFixture<StocksEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
