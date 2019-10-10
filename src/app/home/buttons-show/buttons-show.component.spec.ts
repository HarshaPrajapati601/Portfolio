import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsShowComponent } from './buttons-show.component';

describe('ButtonsShowComponent', () => {
  let component: ButtonsShowComponent;
  let fixture: ComponentFixture<ButtonsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
