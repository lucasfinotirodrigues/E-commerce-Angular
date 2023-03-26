import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActionFiguresComponent } from './modal-action-figures.component';

describe('ModalActionFiguresComponent', () => {
  let component: ModalActionFiguresComponent;
  let fixture: ComponentFixture<ModalActionFiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalActionFiguresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActionFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
