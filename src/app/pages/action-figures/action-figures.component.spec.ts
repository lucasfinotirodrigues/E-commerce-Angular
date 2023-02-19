import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFiguresComponent } from './action-figures.component';

describe('ActionFiguresComponent', () => {
  let component: ActionFiguresComponent;
  let fixture: ComponentFixture<ActionFiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionFiguresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
