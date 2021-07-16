import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeninvdetComponent } from './veninvdet.component';

describe('VeninvdetComponent', () => {
  let component: VeninvdetComponent;
  let fixture: ComponentFixture<VeninvdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeninvdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeninvdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
