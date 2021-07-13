import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodreComponent } from './goodre.component';

describe('GoodreComponent', () => {
  let component: GoodreComponent;
  let fixture: ComponentFixture<GoodreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
