import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFactureComponent } from './edit-facture.component';

describe('EditFactureComponent', () => {
  let component: EditFactureComponent;
  let fixture: ComponentFixture<EditFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
