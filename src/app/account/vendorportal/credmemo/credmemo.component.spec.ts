import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredmemoComponent } from './credmemo.component';

describe('CredmemoComponent', () => {
  let component: CredmemoComponent;
  let fixture: ComponentFixture<CredmemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredmemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
