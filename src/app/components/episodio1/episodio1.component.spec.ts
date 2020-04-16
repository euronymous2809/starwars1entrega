import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Episodio1Component } from './episodio1.component';

describe('Episodio1Component', () => {
  let component: Episodio1Component;
  let fixture: ComponentFixture<Episodio1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Episodio1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Episodio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
