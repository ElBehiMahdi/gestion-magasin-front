import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarqueComponent } from './remarque.component';

describe('RemarqueComponent', () => {
  let component: RemarqueComponent;
  let fixture: ComponentFixture<RemarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
