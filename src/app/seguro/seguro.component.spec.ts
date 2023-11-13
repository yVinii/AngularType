import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroComponent } from './seguro.component';

describe('SeguroComponent', () => {
  let component: SeguroComponent;
  let fixture: ComponentFixture<SeguroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguroComponent]
    });
    fixture = TestBed.createComponent(SeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
