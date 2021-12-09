import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonEditComponent } from './rayon-edit.component';

describe('RayonEditComponent', () => {
  let component: RayonEditComponent;
  let fixture: ComponentFixture<RayonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
