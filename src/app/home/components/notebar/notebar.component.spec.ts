import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebarComponent } from './notebar.component';

describe('NotebarComponent', () => {
  let component: NotebarComponent;
  let fixture: ComponentFixture<NotebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
