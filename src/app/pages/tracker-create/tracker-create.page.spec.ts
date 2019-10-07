import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerCreatePage } from './tracker-create.page';

describe('TrackerCreatePage', () => {
  let component: TrackerCreatePage;
  let fixture: ComponentFixture<TrackerCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
