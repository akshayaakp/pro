import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevetypeComponent } from './levetype.component';

describe('LevetypeComponent', () => {
  let component: LevetypeComponent;
  let fixture: ComponentFixture<LevetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
