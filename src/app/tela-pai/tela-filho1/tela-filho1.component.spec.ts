import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFilho1Component } from './tela-filho1.component';

describe('TelaFilho1Component', () => {
  let component: TelaFilho1Component;
  let fixture: ComponentFixture<TelaFilho1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaFilho1Component]
    });
    fixture = TestBed.createComponent(TelaFilho1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
