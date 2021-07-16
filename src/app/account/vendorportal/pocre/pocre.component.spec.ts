import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocreComponent } from './pocre.component';

describe('PocreComponent', () => {
  let component: PocreComponent;
  let fixture: ComponentFixture<PocreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
