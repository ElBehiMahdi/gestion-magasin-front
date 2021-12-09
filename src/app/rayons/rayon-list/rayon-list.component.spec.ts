import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonListComponent } from './rayon-list.component';

describe('RayonListComponent', () => {
  let component: RayonListComponent;
  let fixture: ComponentFixture<RayonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
