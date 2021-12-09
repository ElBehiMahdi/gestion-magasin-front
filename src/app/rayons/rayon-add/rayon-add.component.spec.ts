import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonAddComponent } from './rayon-add.component';

describe('RayonAddComponent', () => {
  let component: RayonAddComponent;
  let fixture: ComponentFixture<RayonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
