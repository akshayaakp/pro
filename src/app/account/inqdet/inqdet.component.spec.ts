import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InqdetComponent } from './inqdet.component';

describe('InqdetComponent', () => {
  let component: InqdetComponent;
  let fixture: ComponentFixture<InqdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InqdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InqdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
