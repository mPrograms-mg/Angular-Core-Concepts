import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildCommunicationsComponent } from './parent-child-communications.component';

describe('ParentChildCommunicationsComponent', () => {
  let component: ParentChildCommunicationsComponent;
  let fixture: ComponentFixture<ParentChildCommunicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentChildCommunicationsComponent]
    });
    fixture = TestBed.createComponent(ParentChildCommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
