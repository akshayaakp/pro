import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpproedComponent } from './empproed.component';

describe('EmpproedComponent', () => {
  let component: EmpproedComponent;
  let fixture: ComponentFixture<EmpproedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpproedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpproedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
