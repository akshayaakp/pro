import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullsettComponent } from './fullsett.component';

describe('FullsettComponent', () => {
  let component: FullsettComponent;
  let fixture: ComponentFixture<FullsettComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullsettComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullsettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
