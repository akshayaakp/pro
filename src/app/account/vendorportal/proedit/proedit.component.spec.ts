import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProeditComponent } from './proedit.component';

describe('ProeditComponent', () => {
  let component: ProeditComponent;
  let fixture: ComponentFixture<ProeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
