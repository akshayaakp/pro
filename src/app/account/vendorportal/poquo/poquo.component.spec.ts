import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoquoComponent } from './poquo.component';

describe('PoquoComponent', () => {
  let component: PoquoComponent;
  let fixture: ComponentFixture<PoquoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoquoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoquoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
