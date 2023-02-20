import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFigures2Component } from './action-figures2.component';

describe('ActionFigures2Component', () => {
  let component: ActionFigures2Component;
  let fixture: ComponentFixture<ActionFigures2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionFigures2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionFigures2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
