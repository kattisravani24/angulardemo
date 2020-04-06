import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprtyBindingComponent } from './proprty-binding.component';

describe('ProprtyBindingComponent', () => {
  let component: ProprtyBindingComponent;
  let fixture: ComponentFixture<ProprtyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProprtyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprtyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
