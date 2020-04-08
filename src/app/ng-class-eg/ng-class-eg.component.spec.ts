import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassEgComponent } from './ng-class-eg.component';

describe('NgClassEgComponent', () => {
  let component: NgClassEgComponent;
  let fixture: ComponentFixture<NgClassEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
