import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstmod1Component } from './firstmod1.component';

describe('Firstmod1Component', () => {
  let component: Firstmod1Component;
  let fixture: ComponentFixture<Firstmod1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firstmod1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Firstmod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
