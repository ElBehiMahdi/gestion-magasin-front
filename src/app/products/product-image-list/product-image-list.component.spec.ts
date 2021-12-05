import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageListComponent } from './product-image-list.component';

describe('ProductImageListComponent', () => {
  let component: ProductImageListComponent;
  let fixture: ComponentFixture<ProductImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
