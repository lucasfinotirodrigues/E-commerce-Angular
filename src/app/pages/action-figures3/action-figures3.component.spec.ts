import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFigures3Component } from './action-figures3.component';

describe('ActionFigures3Component', () => {
  let component: ActionFigures3Component;
  let fixture: ComponentFixture<ActionFigures3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionFigures3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionFigures3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
