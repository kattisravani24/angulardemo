import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesCitiesComponent } from './states-cities.component';

describe('StatesCitiesComponent', () => {
  let component: StatesCitiesComponent;
  let fixture: ComponentFixture<StatesCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
