import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasInfantisComponent } from './roupas-infantis.component';

describe('RoupasInfantisComponent', () => {
  let component: RoupasInfantisComponent;
  let fixture: ComponentFixture<RoupasInfantisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoupasInfantisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoupasInfantisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
