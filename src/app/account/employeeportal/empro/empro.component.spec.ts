import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmproComponent } from './empro.component';

describe('EmproComponent', () => {
  let component: EmproComponent;
  let fixture: ComponentFixture<EmproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
