import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStep1Component } from './wizard-step1.component';

describe('WizardStep1Component', () => {
  let component: WizardStep1Component;
  let fixture: ComponentFixture<WizardStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
