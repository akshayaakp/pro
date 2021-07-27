import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavedetComponent } from './leavedet.component';

describe('LeavedetComponent', () => {
  let component: LeavedetComponent;
  let fixture: ComponentFixture<LeavedetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavedetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavedetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
