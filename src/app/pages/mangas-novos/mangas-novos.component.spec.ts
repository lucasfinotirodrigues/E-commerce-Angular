import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasNovosComponent } from './mangas-novos.component';

describe('MangasNovosComponent', () => {
  let component: MangasNovosComponent;
  let fixture: ComponentFixture<MangasNovosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangasNovosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasNovosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
