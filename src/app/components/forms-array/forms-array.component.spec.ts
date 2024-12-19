import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsArrayComponent } from './forms-array.component';

describe('FormsArrayComponent', () => {
  let component: FormsArrayComponent;
  let fixture: ComponentFixture<FormsArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsArrayComponent]
    });
    fixture = TestBed.createComponent(FormsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
