import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasSeminovosComponent } from './mangas-seminovos.component';

describe('MangasSeminovosComponent', () => {
  let component: MangasSeminovosComponent;
  let fixture: ComponentFixture<MangasSeminovosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangasSeminovosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasSeminovosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
