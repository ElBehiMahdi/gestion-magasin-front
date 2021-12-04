import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdminListComponent } from './products-admin-list.component';

describe('ProductsAdminListComponent', () => {
  let component: ProductsAdminListComponent;
  let fixture: ComponentFixture<ProductsAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
