import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavequoComponent } from './leavequo.component';

describe('LeavequoComponent', () => {
  let component: LeavequoComponent;
  let fixture: ComponentFixture<LeavequoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavequoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavequoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
