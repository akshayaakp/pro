import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerboardComponent } from './customerboard.component';

describe('CustomerboardComponent', () => {
  let component: CustomerboardComponent;
  let fixture: ComponentFixture<CustomerboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
