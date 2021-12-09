import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonsComponent } from './rayons.component';

describe('RayonsComponent', () => {
  let component: RayonsComponent;
  let fixture: ComponentFixture<RayonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
