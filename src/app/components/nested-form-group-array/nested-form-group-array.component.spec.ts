import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormGroupArrayComponent } from './nested-form-group-array.component';

describe('NestedFormGroupArrayComponent', () => {
  let component: NestedFormGroupArrayComponent;
  let fixture: ComponentFixture<NestedFormGroupArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedFormGroupArrayComponent]
    });
    fixture = TestBed.createComponent(NestedFormGroupArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
