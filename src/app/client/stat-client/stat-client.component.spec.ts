import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatClientComponent } from './stat-client.component';

describe('StatClientComponent', () => {
  let component: StatClientComponent;
  let fixture: ComponentFixture<StatClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
